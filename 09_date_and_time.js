let Mydate = new Date();
console.log(typeof Mydate);     //Output --> object
// console.log(Mydate.toString());
// console.log(Mydate.getTime());
// console.log(Mydate.getHours());
// console.log(Mydate.toJSON());
// console.log(Mydate.toISOString());
// console.log(Mydate.toLocaleString());
// console.log(Mydate.toLocaleDateString());
// console.log(Mydate.toTimeString());


// let newdate = new Date(2023, 0, 22);
let newdate = new Date("2023-01-14");
console.log(newdate.toDateString());

let datee = Date.now(); //This is calculating ms from 1970 Jan.
console.log(datee);
