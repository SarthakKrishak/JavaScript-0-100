// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


//Now we are studying scope,
if (true) {
    let a = 40;
    const b = 50;
    var c = 60;
}

// console.log(a);
// console.log(b);
// console.log(c);

//If you check the output then you can see that a,b are inside the scope so 40 and 50 will not get printed but if we declare variable with 'var' then it can be accessed outside the scope too.

//Therefore using var is not correct.

//Overwriting case,
var c = 300;
if (true) {
    let a = 40;
    const b = 50;
    var c = 60;
}

// console.log(a);
// console.log(b);
//console.log(c);  //Output is 60


//Global scope and block scope example
//let a = 300;
if (true) {
    let a = 40;
    const b = 50;
    console.log("Inner",a); //Output 40
    
}

//console.log(a);  //Output 300



//Nested function scope example,
function one() {
    const username = "sarthak"
    function two() {
        const lastname = "Krishak"
        console.log(username);
    }
    //console.log(lastname);  //As this is outside the scope so cannot be accessed
    
    two();
    
}
one()



//Nested if scope example

if (true) {
    const username = "Sarthak"
    if (username == "Sarthak") {
        const lastname = "Krishak"
        console.log(username+" "+lastname);
    }
    //console.log(lastname);  //Cannot be accessed as outside the scope
}
//console.log(username); //Cannot be accessed as outside the scope



//🔴🔴🔴Interesting Example

//first way of defining functions
console.log(addOne(2));

function addOne(e) {
    return e + 1;
}


//Second way of defining functions
console.log(addTwo(5));

const addTwo = function(e) {
    return e + 1;
}

//Now in the first case we are getting the output despite writing the log line before the function but in the second case we are getting errors so remember this and here comes the concept of 'hoisting'.


