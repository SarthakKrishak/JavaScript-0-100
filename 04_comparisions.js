// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


/* Equality and Inequality operators */

// == equal to
// != not equal to
// === strict equal to (both value and type must be same)
// !== strict not equal to (both value and type must not be same)

// if ("4"==4){
//     console.log("Equal")
// }else{
//     console.log("Not equal")
// }

// if (4!=="4"){
//     console.log("Not equal")
// }else{
//     console.log("Equal")
// }

// if (4===4){
//     console.log("Strictly equal")
// }else{
//     console.log("Not strictly equal")
// }

// if (4!==4){
//     console.log("Not Strictly equal")
// }else{
//     console.log("Strictly Not equal")
// }


console.log(null > 0);  //Output => false
console.log(null>=0);   //Output => true
console.log(null==0);   //Output => false

// The reason is that comparison and eqaulity check works differently.comparison convert null to a number , treating it as 0.


console.log(undefined > 0);   //Output => false
console.log(undefined >= 0);  //Output => false
console.log(undefined ==0);   //Output => false




console.log( "2"==2 );  //Checked the values and then returned true
console.log( "2"===2 ); //Strictly check for  both Value and Type, so it returns false