// console.log("hello")
// let a=10
// a='welcome'
// // let day="Tuesday"
// // let c=a-day
// // console.log(day);
// console.log(a.push(5))




// primitive types
// number,bool and string

// let empName='test';
// // empName = 3
// console.log(empName)
// let employeeName :String="welcome";
// employeeName ='testing'
// console.log(empName)


// let isPerment:boolean = true
// isPerment=45

// let age=30


// let multiply = (num:number)=>{
//   return 10*num
// }

// console.log(multiply(40))

// TypeScript Arrays

// Implicit

  // let numSample = [1,2,3,4]

  // let strSample =['a','b','c']
  // let boolSample =[true,false]

  // numSample.push('a')
// Explicit


// let numSample:number[] = [1,2,3,4]
// let strSample:string[] =['a','b','c']
// let boolSample:boolean[] =[true,false]


// Declare and Assign later

  // let numSample:number[]=[]
 
  // let strSample:string[]=[]
  // numSample.push(1)
  // strSample.push("hello")

// read only

// let numSample:readonly number[] = [1,2,3,4]
// numSample.push(30)

// console.log(numSample)

// TypeScript Objects

// Implicit or Type Inference

// let employee ={
//   empName:'Test',
//   age:30,
//   isPerment:true
// }

// employee.age=34
// console.log(employee)
// employee={
//   empName:'testing',
//   age:34,
//   isPerment:false
// }

// console.log(employee)

// Explicit

// type Employee ={
//   empName:string,age:number,isPerment:boolean
// }

// let employee:Employee={
//   empName:'Test',
//   age:30,
//   isPerment:true
// }




// Options


// type Employee ={
//   empName:string, age?:number,isPerment:boolean
// }

// let employee:Employee ={
//   empName:'Test',
//   // age:30,
//   isPerment:true
// }



// TypeScript - Union Types

// More than one Type - union type 

// Union Type - Or - '|'

// Implicit or Type Inference

// let unionArray =[2,'hello',true]
// unionArray.push(20)


// console.log(unionArray)

// Explicit


// let errorCode:(string | number |boolean);
// errorCode ='401';
// errorCode =401;
// errorCode =true;


// let unionArray:(string | number | boolean)[]=[];
// unionArray.push(2);
// unionArray.push("two");
// console.log(unionArray);



// TypeScript - any Type //Avoid this



// Basic Types

  // let empName:any ='Test'
  // empName = 30
  // empName = true
  // console.log(empName)


// Array

//   let anyArray:any[] = [];

//   anyArray.push('Test')
//   anyArray.push(30)
//   anyArray.push(true)

//  console.log(anyArray)


// object

// type Employee ={
//   empName:any,
//   age:any
// }

// let employee:Employee;
// employee = {empName:'test',age:30}
// employee = {empName:30,age:'test'}

// console.log(employee)


// null and undefined


// let s:null = null
// let y:undefined = undefined                                                                      

// -----------------------------------------------------------------------------------------------------------------------------

// TypeScript - Functions

// Function Type

// let greet:Function;
// let greet = () =>{
//   return 'hello'
// }
  
// Fuction with param


// let add = (a:number,b:number)=>{
//   return (a+b);
// }

// console.log(add(10,20))

// Function with return type


// let add = (a:number,b:number):number=>{
//   return (a+b);
// }

// console.log(add(10,20))



// Function with Union Type params


// let add = (a:number,b:number,c:(string |number)):number=>{

//   if(typeof c === 'number'){
//     return (a+b+c);

//   }
//   return a+b;
// }

// console.log(add(10,20,12))

// Function with optional params


// let add = (a:number,b:number,c?:(string |number)):number=>{

//   if(typeof c === 'number'){
//     return (a+b+c);

//   }
//   console.log(c)
//   return a+b;
// }


// console.log(add(10,20))

// Function with default value


// let add = (a:number,b:number,c:(string |number)=10):number=>{
  
// console.log(c)
//   if(typeof c === 'number'){
//     return (a+b+c);
//   }
//   return a+b;
//  }


// console.log(add(10,20))


// Function with Type alias params
// type StrOrNum = string|number

// let add = (a:number,b:number,c:StrOrNum=10):number=>{

//   if(typeof c === 'number'){
//     return (a+b+c);

//   }
//   console.log(c)
//   return a+b;
//  }


// console.log(add(10,20))


// type user ={name:string,age:number}
// let printObject = (user:user)=>{
//   console.log(`name is ${user.name} and age is ${user.age}`)
// }

// printObject({name:'test',age:30})
  

// rest params

// let add = (a:number,b:number,...c:number[]):number=>{

//   console.log(c)
//   let d =  c.reduce((x,y)=>x+y,0)
//   return a+b+d;
//  }


// console.log(add(10,20,1,2,3,4,5,6,7))



// Function signature


// let add :(x:number,y:number,...z:number[])=> number;
//  add = (a:number,b:number,...c:number[]):number=>{

//   console.log(c)
//   let d =  c.reduce((x,y)=>x+y,0)
//   return a+b+d;
//  }


// console.log(add(10,20,1,2,3,4,5,6))


// -----------------------------------------------------------------------------------------------------------------------------

// Typescript - Tuples or Typed Array

// Array

// let userArray= ['John',30,true]
// userArray[0]=40
// console.log(userArray)

// Tuple

// let userTuple:[string,number,boolean]= ['John',30,true]
// userTuple[0]='test'
// userTuple.push(4)

// console.log(userTuple)


// readonly

// let userTuple:readonly [string,number,boolean]= ['John',30,true]
// userTuple[0]='test'
// userTuple.push(4)

// console.log(userTuple)


// Named


// let userTuple:readonly [userName:string,age:number,isEng:boolean]= ['John',30,true]

// // Accessing Named Tuple /Destructuring

// let  [Name,age,isEng] =  userTuple
// console.log(Name)
// -----------------------------------------------------------------------------------------------------------------------------


// Typescript =Type Alias

// Prmitive Types


type UserName =string
type YesorNo = boolean
type Age = Number


// let userName:UserName ='john'
// let isEng:YesorNo =true
// let age:Age = 45



// Array

// type NamesArray = string[]

// let userName:NamesArray = ['a','b','c']



// Object

// type User ={
//   name:UserName,
//   age:Age,
//   isEng:YesorNo
// }

// let user:User = {name:'john',age:34,isEng:true}

// Union Type


// type StrorNum = string|number

// let errorCode:StrorNum = '402'
//  errorCode = 402


// Tuples

// type NameAndAge = [name:string ,age:number]

// let userTuple :NameAndAge=['john',34]



// -----------------------------------------------------------------------------------------------------------------------------


// TypeScript - Type Casting

// syntax
// as or <> 

// unknown string to string
  // let x:unknown = 'hello'
  // console.log(x.length)
  // console.log((x as string).length)
  // console.log((< string>x).length)

// unknow number to string 

  // let y:unknown = 20

  // console.log((y as string).length)


// DOM

// let input = document.querySelector("input") as HTMLInputElement
// let inputVal = input.value
// console.log(inputVal)

// -----------------------------------------------------------------------------------------------------------------------------

// TypeScript =Enums
// enum - group of constants

// number

// enum Direction{
//   East =200,
//   west,
//   South,
//   North,
// }


// console.log(Direction.South)
// enum StatusCode{
//   Success=200,
//   unauthorized = 401,
//   ServerError=500
// }

// String

// enum Direction{
//   East = 'East',
//   West = 'West',
//   South = 'South',
//   North = 'North',
// }


// console.log(Direction.South)


// -----------------------------------------------------------------------------------------------------------------------------

// TypeScript  - Interfaces 
// Interfaces - Only work with object



interface User {
  name:string,
  age:number
}


// const user:User = {
//   name:'Test',
//   age:40
// }




// function Interface

// interface Function{
//   (x:number,y:number):number
// }


// let add:Function = (p1:number,p2:number)=>{
//   return p1+p2
// }
// Extending Interfaces

// interface Employee extends User{
//   employeeId:number
// }


// const employee:Employee = {
//   name:'john',
//   employeeId:234,
//   age:34
// }
// type cant be replaced with

// type StrOrNum = string|number


// let errorCode:StrOrNum ='404'
//  errorCode =234


// -----------------------------------------------------------------------------------------------------------------------------

// TypeScript - Class

// Simple class

// class User {
//   id:number

//   constructor(x:number){
//     this.id=x
//   }
// }

// let userobject = new User(10)
// console.log(userobject.id)


// interface

// interface PersonInterface{
//   id:number,
//   name:string
// }

// interface AddressInterface {
//   city:string
// }
// 
// class implements interface


// class Person implements PersonInterface,AddressInterface{
//   id:number
//   name:string
//   city:string

//   constructor(id:number,name:string,city:string){
//     this.id = id
//     this.name = name
//     this.city=city
//   }

//   getName = ()=>{
//     return this.name
//   }
// }


// let person = new Person(34,'john','chennai')

// console.log(person.city)
// console.log(person.getName())


// class implements multiple interface


// // extends

// class Student extends Person{

//   studentId:number=101


//   print (){
//     console.log(`name is ${this.name} and my id is ${this.studentId} `)
//   }

// }


// let student =  new Student(100,'Testing','chennai')
// console.log(student.getName())
// student.print()


// TypeScript - Abstract class

// Abstract class - Incomplete class

abstract class Person{
   abstract name:string

  // constructor(name:string){
  //   this.name = name
  // }

  abstract  print():void 
}
// Child class

class Student extends Person{
  name:string

  constructor(x:string){
    super()
    this.name = x 
  }
  print=()=>{
    console.log("hello");
  }
}

let studentObject = new Student('john')
studentObject.print()



Abstract vs Interface

interface Address {
  city:string
}

typeof
TypeScript - Data Modifiers


public,protected,private


class Person{
  public readonly  name:string

  constructor(name:string){
    this.name = name
  }
}


class Employee extends Person{
   print = ()=>{
    console.log(this.name)
  }
  changeName =(name:string ) => {
    this.name = name
  }
}

let empObject = new Employee ('john')
empObject.changeName('test')
empObject.print()

empObject.name = 'testing'
empObject.print()




TypeScript -  Generics

Resuable code

const toArray =  (x:any,y:any,z:any)=>{
  return [x,y,z]
}


let arr = toArray('1','2',45)
let arr1= toArray(3,true,'3')
console.log(arr)

Generics


const toArrayGeneric =  <T>(x:T,y:T,z:T)=>{
  return [x,y,z]
}

// let arr = toArrayGeneric<number>(4,5,45)
let arr = toArrayGeneric<string>('4','5','45')
console.log(arr)


Multiple Types

let printValues =<x,y,z>(a:x,b:y,c:z)=>{
  console.log(`a is ${typeof a} and b is ${typeof b} and c is ${typeof c}`)
}

printValues("one",2,true)


Type and Generics Together

let printValues =<x,y,z>(a:x,b:y,c:z,d:number)=>{
  console.log(`a is ${typeof a} and b is ${typeof b} and c is ${typeof c}`)
}

printValues("one",2,'true',4)


Let statusCode = new statuscode({success:200})


Array Params

let printArray =  <T>(array:T[])=>{
  console.log(array.join(','))
}

printArray([1,2,3,4,5])
printArray([true,false,true])

interface

Type

interface Dictionary <T,U>{
  key:T,
  value:U
}

let dict:Dictionary<string,number> = {key:'one',value:1}
let dict1:Dictionary<string,boolean> = {key:'one',value:true}
console.log(dict)
console.log(dict1)

Function Interface

interface Maths <T>{
  (x:T,y:T):T
}

let add:Maths<number>=(x:number,y:number)=>{
  return x+y
}
console.log(add(3,4))
let addStr:Maths<string>=(x:string,y:string)=>{
  return x+y
}
console.log(addStr('wel','come'))


Class

class Statuscode <T extends string>{
  code:T
  message:string

  constructor(code:T){
    this.code =  code
    this.message='message'
  }
}

let statusCode = new Statuscode('{code:400}')
console.log(statusCode.code)

// Generic Constraints

// class Statuscode <T>{
//   code:T
//   // message:string

//   constructor(code:T){
//     this.code =  code
//   }
// }

// let statusCode = new Statuscode({name:'aaa'})
// console.log(statusCode.code)
