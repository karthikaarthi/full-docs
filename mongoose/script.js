const mongoose = require('mongoose');
const User = require("./User");
main().catch(err => console.log(err.message));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tes');
  // const user = await User.create({name:"ragavi",age:30})
  // user.name="ravi"
  // console.log(user);
  const user4 = await User.create({ 
    name:"raj",
    age:20, 
    email:"rajDDDDDD@gmail.com",
    hobbies:["dancing","singing"],
    address:{
      street:"street1"
    }
  })
  // user.createAt =8
  // user.name =  "karthi"
  
  // await user.save()
  // const user = await User.findById('662b8635e8ff2618764fa2e0');
  // const user = await User.find({name:"raj"});
  // const user =await User
  // .where("name")
  // .equals("raj")
  // .where ("age")
  // .lt(30)
  // .limit(20)
  // .populate("bestFriend");
  // .select("age");
  // user[0].bestFriend ='662b762c9b45e0229b978243';
  // await user[0].save()
  // await User.deleteOne({_id:"662b7643299253077e30c2fb"})
  // await User.deleteOne({_id:"662b75fc8e7b5b423791ccb6"})
  //  const user = await User.find();
  // const user = await User.findOne({name:"ramkumar"})
  //   user.sayHi();

  // const user = await User.findByName("ramkumar").limit(2)
  // const user = await User.byName("ramkumar")
  //  console.log(user)
  //  const user = await User.findOne({name:"ramkumar"})
  //  console.log(user.namedEmail)
  //  console.log(user)
  //  user.save()
   console.log(user4)
}

// const user = new User ({name:"ananthi",age:20})
// user.save().then((()=>{console.log("user save")}))






 



  