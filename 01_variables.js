const accountId = 144553
let accountEmail = "sarthak@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountstate //if you not assign a value to the variable then it shows 'undefined' in the output.

// let is used for declaring variables that are accessible within the entire block, scope of let is limited to the current block, statement or expression.


/*
Prefer not to use var
Use let and const instead of var for variable declaration in JavaScript. The reason is the issue in block scope and functional scope.
*/

//accountId = 2525252 //This cannot be done as we cannot change the value of a constant
accountEmail= "krishak@google.com"
accountPassword= "212121"
accountCity= "Chhindwara"

//console.log(accountPassword); //Used to print the function

var print=console.table([accountId,accountEmail,accountPassword,accountCity,accountstate]) //used to print many things at once

console.log(print);