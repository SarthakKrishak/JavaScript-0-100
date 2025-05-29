(function server() {
    console.log("Server Started");

})();

//Now if you want to run two function so you have to first end the first function with a semicolon.

(function first() {
    //Named IIFE (Imediately Invoked Function Expression)
    console.log("First Function");
})();

(function second() {
    console.log("Second Function");
})();

(() => {
    //Unnamed IIFE (Imediately Invoked Function Expression)
    console.log("Third Function");
})();


//Execution of this type of functions

(function first(name) {
    console.log(`First Function of ${name}`);
})("Sarthak");