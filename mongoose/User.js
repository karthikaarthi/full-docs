const mongoose = require("mongoose")
const addressSchema = new mongoose.Schema({
  
    street:String,
    city:String,
  
})
const UserSchema = new mongoose.Schema({
  
  name:String,
  age:Number,

})

const userSchema = new mongoose.Schema({
  name:String,
  age:{
    type:Number,
    min:1,
    max:120,
    validate:{
      validator:v => v%2 == 0,
      message:props => `${props.value} is not an even number` 
    }
  },
  email:{
    type:String,
    minLength:10,
    required:true,
    lowercase:true,
    // uppercase:true,
  },
  
  createdAt:{
    type:Date,
    immutable:true,
    default:() => Date.now()
  },
  updateAt:{
    type:Date,
    default:() => Date.now()
  },
  bestFriend:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:"User",
  },
  hobbies:[String],
  address:   addressSchema
//    {
  
//     street:String,
//     city:String,
  
// }


})


userSchema.methods.sayHi =function(){
  
  const greeting = this.name?`Hi! My name is  ${this.name}`:"I don\'t have name";
  // console.log(`Hi my name is ${this.name}`);
  console.log(greeting)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
};

userSchema.statics.findByName = function(name){
  return this.where({name: new RegExp(name,"i")})
}

userSchema.query.byName = function(name){
  return this.where({name: new RegExp(name,"i")})
}


userSchema.virtual("namedEmail").get(function(){
  return`${this.name} <${this.email}>`
})


userSchema.pre("save",function(next){
  this.updateAt =  Date.now()
  next()
})

userSchema.post("save",function(doc,next){
  doc.sayHi()
  next()
})

module.exports = mongoose.model("User",userSchema)