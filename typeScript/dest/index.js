"use strict";
// console.log("hello")
// let a=10
// a='welcome'
// // let day="Tuesday"
// // let c=a-day
// // console.log(day);
// console.log(a.push(5))
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
class Person {
}
// Child class
class Student extends Person {
    constructor(x) {
        super();
        this.print = () => {
            console.log("hello");
        };
        this.name = x;
    }
}
let studentObject = new Student('john');
studentObject.print();
Abstract;
vs;
Interface;
typeof TypeScript - Data;
Modifiers;
public, protected, private;
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor() {
        super(...arguments);
        this.print = () => {
            console.log(this.name);
        };
        this.changeName = (name) => {
            this.name = name;
        };
    }
}
let empObject = new Employee('john');
empObject.changeName('test');
empObject.print();
empObject.name = 'testing';
empObject.print();
TypeScript - Generics;
Resuable;
code;
const toArray = (x, y, z) => {
    return [x, y, z];
};
let arr = toArray('1', '2', 45);
let arr1 = toArray(3, true, '3');
console.log(arr);
Generics;
const toArrayGeneric = (x, y, z) => {
    return [x, y, z];
};
// let arr = toArrayGeneric<number>(4,5,45)
let arr = toArrayGeneric('4', '5', '45');
console.log(arr);
Multiple;
Types;
let printValues = (a, b, c) => {
    console.log(`a is ${typeof a} and b is ${typeof b} and c is ${typeof c}`);
};
printValues("one", 2, true);
Type;
and;
Generics;
Together;
let printValues = (a, b, c, d) => {
    console.log(`a is ${typeof a} and b is ${typeof b} and c is ${typeof c}`);
};
printValues("one", 2, 'true', 4);
Let;
statusCode = new statuscode({ success: 200 });
Array;
Params;
let printArray = (array) => {
    console.log(array.join(','));
};
printArray([1, 2, 3, 4, 5]);
printArray([true, false, true]);
interface;
Type;
let dict = { key: 'one', value: 1 };
let dict1 = { key: 'one', value: true };
console.log(dict);
console.log(dict1);
Function;
Interface;
let add = (x, y) => {
    return x + y;
};
console.log(add(3, 4));
let addStr = (x, y) => {
    return x + y;
};
console.log(addStr('wel', 'come'));
Class;
class Statuscode {
    constructor(code) {
        this.code = code;
        this.message = 'message';
    }
}
let statusCode = new Statuscode('{code:400}');
console.log(statusCode.code);
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
