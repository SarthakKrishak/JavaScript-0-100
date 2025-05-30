const score = 60;
//Now this is a way of storing a number .
//But if you want to specify on your own that its a number type so you can do this by following method,

const balance = new Number(100);

console.log(score);       //Output -- 60
console.log(balance);     //Output -- [Number: 100]

console.log(balance.toString().length);

//In this prototype we are giving 2 digits after decimal for accurate calculation --> (100.00)
console.log(balance.toFixed(2));

const num = 123.8976;
//This will check for starting 3 digit precision.
console.log(num.toPrecision(3));

const num2 = 1000000;
//It will represent the above in indian number system,
console.log(num2.toLocaleString('en-IN'));



//----------------------------Maths-----------------------------------

console.log(Math);
console.log(Math.abs(-56));
console.log(Math.round(4.9)); //Round off
console.log(Math.ceil(4.2));    //Ceiling
console.log(Math.floor(4.2));   //Floor
console.log(Math.min(4, 34, 6, 8, 2, 1, 0)); //Minimun value
console.log(Math.max(4, 34, 6, 8, 2, 1, 0)); //Max value


console.log(Math.random());     //Give value btw 0 and 1.
console.log(Math.random()*10);
console.log((Math.random()*10)+1);  //Adding 1 to avoid 0 
console.log(Math.floor((Math.random()*10)+1));


const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







