//🔴 for of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const arr1 = ["Sarthak", "krishak", "Recon"]

for (const num of arr1) {
    console.log(num);
}

const arr2= "Sarthak"
for (const element of arr2) {
    console.log(element);
}



//🔴 Map

const map = new Map();
map.set("IN","india")
map.set("USA","America")
map.set("FN", "France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,value);
}



//🔴 for in  (as for of does not work in object)

const obj = {
    name: "Sarthak",
    age: 20,
}

for (const key in obj) {
    //for key printing
    console.log(key);
    //For value printing
    console.log(obj[key]);
    
}



//🔴 for each

const arr4 = ["js","python","ruby"]

arr4.forEach((e) => {
    console.log(e);
    
});