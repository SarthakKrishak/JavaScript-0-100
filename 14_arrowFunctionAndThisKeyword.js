const obj = {
    username: "Sarthak",
    price: 505,
    welcomeMessage:function() {
        console.log(`Welcome ${this.username}`); //Here 'this' tells the current context.
        console.log(this);
        
    }
}

// obj.welcomeMessage()
// obj.username = "recon"
// obj.welcomeMessage()
// console.log(this);


//🔴this context outside it without calling the value in object.
const obj1 = {
    username: "Sarthak",
    price: 505,
    welcomeMessage:function() {
        console.log(`Welcome ${this.username}`); //Here 'this' tells the current context.
        console.log(this);
        
    }
}

// obj.welcomeMessage()
// obj.username = "recon"
// obj.welcomeMessage()

//console.log(this);  //It will give an empty object. (IN NODE ENVIROMENT)



//🔴this context inside a function

function one() {
    const username = "Krishak"
    //console.log(this);
    //console.log(this.username);  //It will give undefined as we cannot use this in function can only be used in object.
}
//one()

//🔴Same in this way of declaring the function,

const two = function() {
    const username = "Krishak"
    //console.log(this);
    //console.log(this.username);  //It will give undefined as we cannot use this in function can only be used in object.
}
//two()



//🔴In case of arrow function

const three = ()=> {
    const username = "Krishak"
    //console.log(this);  //Empty object
    //console.log(this.username);  //It will give undefined as we cannot use this in function can only be used in object.
}
//three()


//🔴Arrow funtion ()=>{}

//First way of writing it, (Explicit return)
const addNum = (one, two) => {
    return one + two;
};
console.log(addNum(1, 2));

//Second way of writing it, (Implicit return)
const add = (one, two) => one + two;

console.log(add(1, 4));


//Third way of writing it,
const addN = (one, two) => (one + two);

console.log(addN(3, 4));

//Returning the object using arrow function

const ret = (one, two) => ({username:"Sarthak"});

console.log(ret(3, 4));

 