//We can store different types in an array
//let arr = [1, 2, 3, 4, "sarthak", {}, []];

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[1]);

// // arr.push(7);
// // arr.push(8);
// console.log(arr);

// arr.pop() //last element will be removed
// console.log(arr);

// arr.unshift(9);  //insert at the starting
// console.log(arr);

// arr.shift()     //remove the starting value
// console.log(arr);

// console.log(arr.includes(5));
// console.log(arr.indexOf(1));


// let newArray = arr.join()
// console.log(newArray);  //type is string.

//🔴🔴Difference btw splice and slice,

// splice is used to add or remove elements from an array.
// slice is used to get a subset of an array.
// splice returns the removed elements.
// slice returns a new array.

// Basically when you apply splice then the the element are removed for that range of index that you have given but it changes the original array as well, but its not the case with slice.

//Ex -
// let arr = [1, 2, 3, 4, 5, 6]
// let a = arr.splice(1, 3);
// console.log(arr);
//  console.log(a);
//  Output -->
//  [1, 5, 6]
//  [2, 3, 4]

// let b = arr.slice(1, 3);
// console.log(b);
// Output-->
// [1, 2, 3, 4, 5, 6]
// [2, 3]


let arr1 = ["sarthak","krishak","recon"]
let arr2 = ["sarthak", "krishak", "delta"]

// let x = arr1.push(arr2);
//This will return the length of the array arr1
// console.log(typeof x);

// arr1.push(arr2)
// console.log(arr1);

//Now if you want to access the delta value from arr1 then,
// console.log(arr1[3][2]);

//For merging two arrays and storing them in a new array
let newArr = arr1.concat(arr2);
console.log(newArr);

//Another method is to use spread operator,
let newArr1 = [...arr1,...arr2]
console.log(newArr1);


//If you are having the following array then,

let arr3 = [1, 2, 3, 4, [, 5, 4, [4, 5, 6, [5, 5]]]];
console.log(arr3.flat(Infinity));   // Infinity is the depth in the array , but we should always give a specific value.

console.log(Array.isArray("sarthak")); //we are checking wheather its array or not.
console.log(Array.from("sarthak"));  //It will create a array 
console.log(Array.from({name:"sarthak"}));  //It will create a empty array 


let score = 100;
let score1 = 200;
let score2 = 300;

console.log(Array.of(score, score1, score2));  //It will make a array out of the given values.
