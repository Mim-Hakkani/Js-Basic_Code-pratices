//NaN is typically returned when an operation that should return a number is given a value that is not a number. For example, when trying to convert a string to a number using the parseInt() or Number() functions, if the string is not in a valid number format, the operation will return NaN.

let num1 = parseInt("mim");
let num2 = Number("mim2");

// console.log(num1); // output : NAN
// console.log(num2); // output : NAN


// example 2 


// NaN is also returned when attempting to perform mathematical operations on non-numeric values (-,*,/,%) operation is works but + operaiton is not worked cause it is used to concatination 


let exmp = 5 / "mim";  // output : NAN


let exmp1 = 15 - "mim";  // output : NAN
// console.log(exmp1);

console.log(NaN === NaN); // Output: false

// To check if a value is NaN, JavaScript provides the isNaN() function. This function returns a Boolean indicating whether the passed value is NaN or not.

console.log('check exmp is NAN or not :: ',isNaN(exmp));  // isNaN()