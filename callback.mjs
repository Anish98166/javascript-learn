//Callback

// let sum = (a, b) => a + b;

// sum(1, 2);

let fun1 = () => {};
let fun2 = () => {};

//higher order function  => Higher-order functions are functions that take other functions as arguments or return functions as their results.

// callback function =>  A callback function is a function passed into another function as an argument.
fun1(fun2);
// .map(()=>{})
// .filter(()=>{})
// .reduce(()=>{})

//Error Handling

let error = new Error("This is an error message");
throw error;
