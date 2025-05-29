//🔴if

// <
// >
// <=
// >=
// ==
// === (It also checks the type)
// !=

console.log(2 == "2");
console.log(2 === "2");

//🔴Switch
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");

        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid");

        break;
}


//🔴Truthy and Falsy Value

const userEmail = "abc@gmail.com"
const user = ""

if (user) {
    console.log("welcome");

} else {
    console.log("Invalid");
}


//Falsy Values-
// 0
// -0
// 0.0
// ""
// 0n
// null
// undefined
// NaN (Not a Number)
// false
// BigInt
// Null and Undefine

//Truthy Values-
// "0"
// "abc"
// 1
// 'false'
// " "
// []
// {}
// function(){}
// true



//🔴Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 20;
//If null or undefined is there so assign the other value.

val1 = null ?? 5 ?? 10;
console.log(val1);


//🔴Terniary Operator

// condition ? true : false;

const price = 50;
price > 40 ? console.log("costly") : console.log("Not Costly");


