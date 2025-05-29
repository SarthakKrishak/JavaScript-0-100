"use strict";   //treat all JS code as newer vesion and it will consider all code in this file as new code.

// alert(3+3)    //we are using node Js not browser, you can use this syntax in the browser but not in node JS.

//Primitive
//    |
//    |
//    |--> String,number,Boolean,null,Undefined,symbol,BigInt

// Reference(Non primitive)
//    |
//    |
//    |--> Array,Objects,Functions


// ARRAY EX
const heros=["Shaktiman","Thor","Ironman"];

//OBJECT EX
let myObj = {
    name:"Sarthak",
    age:18,
}

// FUNCTION EX
const myFunction = function(){
    console.log("HELLO WORLD");
}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


let name = "Sarthak"
let age =18
let loggedIn=true

function printNumber (value) {
    console.log(value);
}

// number => 2 to power 53
// bigInt used when size is greater than 2 to power 53
// String =""
// boolean = true/false
// null => Standalone value (represents  nothing), It's like void in C++ or None in python
// undefined => variable which haven't assigned any value yet.
// symbol => create unique key for object property
// object 

const id =Symbol('123')
const anotherid =Symbol('123')
console.log(id == anotherid);

console.log(typeof "Sarthak");  //used to get the type of the data given to it
console.log(typeof null);       //When you run this command it will show that the type of the  null value is object but why ???  
console.log(typeof undefined);      //type is undefined



console.log("");
alert("Sum of 3+3")


