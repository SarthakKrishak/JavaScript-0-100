//General Structure
function functionName(parameters) {

}
functionName(arguments)


function functionName() {
    console.log("Function run");
}
//To execute the function always give "()"
functionName()


function add(num1, num2) {
    return num1 + num2
    //Code after the above line will never gets printed
}
add(1, 2)
add(1, "Sarthak")

const result = add(1, 2)
console.log(result);



function loginUser(username) {
    return `${username} just logged in`
}
//If you are using return statement then you have to print the value, function will not give anything if you write "loginUser("sarthak")".
console.log(loginUser("sarthak"));


//Using rest (...) operator
function calculateCartPrice(...num) {
    return num
}
console.log(calculateCartPrice(200, 400, 300, 2000));


//Casestudy
function calculateCartPrice(val1,val2,...num) {
    return num
}
//In this the first two values are taken by val1 and val2
console.log(calculateCartPrice(200, 400, 300,2000));


//Object using function
const user = {
    username: "Sarthak",
    age:20
}

function handleObject(anyObject) {
    console.log(`Mr ${anyObject.username} of age ${anyObject.age}`);
}

handleObject(user);
handleObject({
    username: "Bablu",
    age:40
});


//Arrays using function
const arr = [200,400,500]

function array(getArray) {
    return getArray[1]
}

console.log(array(arr));
console.log(array([200,500]));
