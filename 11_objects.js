//Singleton
//If object is made using contructor then its Singleton.

let obj = {
    name: "sarthak",
    age: 187,
    address: "delhi",
    isLoggedIn: true,
    lastLogin:["monday","tuesday"]
}

//These are the two ways to access the object data.
console.log(obj.address);
console.log(obj["address"]);

//Defining a symbol
const mySmb = Symbol("key1");

//Now if you see the following obj,
obj1 = {
    "fullname":"sarthak krishak",
    name: "sarthak",
    [mySmb]: "myKey",
    age: 187,
    address: "delhi",
    isLoggedIn: true,
    lastLogin: ["monday", "tuesday"]
}
//Now in this case you cannot access the fullname using obj1. method,
//So in this case we can use,
console.log(obj1["fullname"]);

// Now giving symbol inside a Object.
console.log(typeof [mySmb]); 


//Overwriting the values,
obj1.name = "recon";

//Freezing the obj so that it will not change the values,
// Object.freeze(obj1);

obj1.greeting = function () {
    console.log("hello Js USER");
}
obj1.greetingTwo = function () {
    console.log(`hello Js USER ${this.fullname}`);
}

console.log(obj1.greeting());
console.log(obj1.greetingTwo());


//There are two ways to define a object,
// const tinder = new Object();
//or
const tinder1 = {};

tinder1.id = "123"
tinder1.name = "sarthak"
tinder1.isLoggedIn = false

// console.log(tinder1);


//Nested Objects
const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sarthak",
            lastname:"Krishak"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname.firstname);



//Merge two objects
const obj2 = {
    1: "s",
    2: "a"
}
const obj3 = {
    3: "r",
    4: "t"
}

// const obj4 = Object.assign(obj2,obj3)
const obj4 = Object.assign({},obj2,obj3)        //Can be defined in this way and accually this is the correct way of writing it.
console.log(obj4);

//The most common way is to use spreed operator
const obj5 = {...obj2,...obj3}
console.log(obj5);


const user = [
    {
        id: 1,
        name:"sarthak"
    },
    {
        id: 2,
        name:"Recon"
    },
    {
        id: 3,
        name:"delta"
    },
]


console.log(user[0].name);


//To collect all the key or value and then storing it in an array,
console.log(Object.keys(tinder1));
console.log(Object.values(tinder1));

console.log(Object.entries(tinder1));
console.log(tinder1.hasOwnProperty("isLoggedIn"));


//Destructure
const course = {
    coursename: "JS",
    price: "999",
    Instructor:"Sarthak"
}

//We can now access the coursename with "naam" only.
const {coursename:naam,price,Instructor} = course

//So by writing this we are saving some efforts of writing "course.coursename" everytime.
console.log(naam);
console.log(price);
console.log(Instructor);


