  import Car,{fillGas,repair} from './car.js'
  
  let car1= new Car()
  car1.drive()
  fillGas()
  repair()

   
   
   
   
   
   
   
   
   
   // let user1={
    //     name:'Ramya',
    //     age:23,
    //     login(){
    //         console.log('hi',this.name)

    //         console.log('You are logged in')
    //     },
    //     logout(){
    //         console.log('you ar logged out')
    //     }
    // }

    // let user2={
    //     name:'Ram',
    //     age:30,
    //     login(){
    //         console.log('hi',this.name)

    //         console.log('You are logged in')
    //     },
    //     logout(){
    //         console.log('you ar logged out')
    //     }
    // }

    // let user3={
    //     name:'joes',
    //     age:26,
    //     login(){
    //         console.log('hi',this.name)
    //         console.log('You are logged in')
    //     },
    //     logout(){
    //         console.log('you ar logged out')
    //     }
    // }
    // user3.login()
// Class is template
    // class User{
    //     constructor(name,age){
    //         this.name=name
    //         this.age=age    //instance variable

    //     }
    //     login(){
    //         console.log('hi',this.name)
    //         console.log('You are logged in')
    //     }
    //     logout(){
    //         console.log('you ar logged out')
    //     }
    // }

    // let user1= new User('ramya',23)
    // user1.login()

    // let user2= new User('ram',29)
    // user2.login()
    // let movie='hello'

    // let music = new String('hello')

    // Static variable ,static method->common variables,methods

    // class User{
    //     static numberOfUsers=0
    //     constructor(name,age){
    //         this.name=name
    //         this.age=age    //instance variable
    //         User.numberOfUsers++;

    //     }
    //     login(){
    //         console.log('hi',this.name)
    //         console.log('You are logged in')
    //     }
    //     logout(){
    //         console.log('you ar logged out')
    //     }
    //     static displayToalNumberOfUsers(){
    //         console.log('Number of Users ',User.numberOfUsers)

    //     }
    // }

    // let user1= new User('aaa',34)
    // let user2= new User('aaa',34)
    // let user3= new User('aaa',34)
    // let user4= new User('aaa',34)
    // User.displayToalNumberOfUsers()
    // console.log('Number of Users ',User.numberOfUsers)


    // Inheritance,overriding


    // class Paiduser extends User{
    //     constructor(name,age){
    //         super(name,age)
    //         // this.name=name
    //         // this.age=age
    //         this.storage=100
    //     }
    //     message(){
    //         console.log('You have free gb')
    //     }
    //     login(){
    //         console.log('Thank you for wonderful support')
    //         return this
    //     }
    // }

    // let paiduser1=new Paiduser('dhana',23)
    // paiduser1.login()
    
    // method chain

    // paiduser1.login().message()

    // ES6,ES5

// protype chaining


// function User(name,age){
//     this.name=name
//     this.age=age
//     this.login=function(){

//     }
// }

// User.prototype.login=function(){
//     console.log('you logged in')
// }
// let user1= new User('abdul',43)
// user1.login()

// // get and set

// class Temperature{
//     constructor(temp){
//         this._temp=temp
//     }
//     get temp(){
//         // return this._temp
//         return ` ${this._temp} deg celsius`
//     }
//     set temp(temp){
//         if(temp>100){
//             temp = 100 
//         }
//         this._temp=temp
//     }
// }

// let temp1=new Temperature(34)
// temp1._temp=150
// temp1.temp=324
// console.log(temp1.temp)

