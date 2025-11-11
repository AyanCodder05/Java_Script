"use strict";//treat all js code as newer version


// let name="Ayan";
// let age=22


// //Datatypes in JS
// //1. Primitive DataTypes: undefined, null, number, string, boolean, symbol, bigint
// //2. Reference DataTypes: Arrays and Objects
// //number=> 2 to the power of 53
// //bigint=> greater than 2 to the power of 53
// //symbol=> unique identifier
// //undefined=> when variable is not assigned any value
// //null=> when variable is empty
// //array=> collection of multiple data items
// //object=> key value pair
// //object is a collection of properties
// //property is an association between a name (or key) and a value
// //object is a non-primitive datatype
// //array is a non-primitive datatype
// //array is a collection of multiple data items
// //array is a special type of object
// //array is a collection of similar data types
// //object is a collection of different data types
// //boolean=> true or false
// //string=> collection of characters
// //string is a collection of characters enclosed in single or double quotes
// //string is a primitive datatype

// console.log(typeof undefined);//Undefined
// console.log(typeof null);//object

// let score="33"

// console.log(typeof score);//number

// let valueInnumber=Number(score)
// console.log(typeof valueInnumber);//number

// //"33abc" => NaN (Not a Number)
// let score2="33abc"
// let valueInnumber2=Number(score2)
// console.log(valueInnumber2);
// console.log(typeof valueInnumber2);//number

//true=>1
//false=>0
let isLoggedIn="Ayan"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);



let isLoggedIn3=0
let booleanIsLoggedIn3=Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

//"",0,null,undefined,NaN=>false
//"Ayan",33,-33,3.14,[],{}=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);//string
