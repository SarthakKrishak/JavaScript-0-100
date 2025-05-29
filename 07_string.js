//String Usefull methods

let naam = "sarthak";
const age = 18;
console.log(typeof (naam));

//We are using string interpolation (` `).
console.log(`Hi my name is ${naam} and I am ${age} old.`);

//Another aay to declare string
const naam1 = new String("Krishak");
const naam2 = new String("Recon-delta")

console.log(naam1[0]);
console.log(naam1.__proto__);
console.log(naam1.length);
console.log(naam1.toUpperCase());
console.log(naam1.valueOf());
console.log(naam1.charAt(2));
console.log(naam1.indexOf('h'));


const newNaam = naam2.substring(0, 5);
console.log(newNaam);

//We can also give negative index in this method.
const newwNaam = naam2.slice(-8, 5);
console.log(newwNaam);

const naam3 = "   Sarthak  ";
console.log(naam3);
console.log(naam3.trim());

const naam4 = "https://sarthakkrishak/about%20Content"

console.log(naam4.replace("%20","-"));
console.log(naam4.includes("sarthak"));


const naam5 = "recon-delta-sarthak";
const str = naam5.split("-"); 

console.log(str);
console.log(str[0]);

