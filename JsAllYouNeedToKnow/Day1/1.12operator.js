/*
Arithmetic operators: used to perform mathematical operations such as addition, subtraction, multiplication, division, and more.

Comparison operators: used to compare values and determine if they are equal, greater than, or less than one another.

Logical operators: used to evaluate the truthiness or falsiness of expressions and combine multiple conditions.

Assignment operators: used to assign a value to a variable.

Conditional (ternary) operator: a shorthand way to write an if-else statement.

Type operators: typeof operator which is used to check the type of variable or value.

Bitwise operators: used to perform bit-level operations on numbers.

Unary operators: used to perform operations on a single operand, such as incrementing or decrementing a value.

Spread operator: used to expand an array or object.

Destructuring operator: used to extract data from arrays or objects.

Computed property names: used to create a dynamic property name for an object literal.

The operator in: used to check if an object has a certain property.

The operator instanceof: used to check the type of an object or if an object is an instance of a certain class.

*/

// Arithmetic Operator + - * / % ++ --

let a = 5
let b = 10
console.log(a + b) //output : 15
console.log(a - b) //output : -5
console.log(a * b) //output : 50
console.log(a / b) //output : 0.5
console.log(a % b) //output : 5
console.log(a++) //output : 5
console.log(++a) //output : 7
console.log(b--) //output : 10
console.log(--b) //output : 8

// Assignment operator

//   = += -= *= /= etc

/* In JavaScript, there are several comparison operators that can be used to compare values and determine if they are equal, greater than, or less than one another. These include:

== (equal to)
=== (strictly equal to)
!= (not equal to)
!== (strictly not equal to)
> (greater than)
< (less than)
>= (greater than or equal to)
<= (less than or equal to)

The difference between == and === is that the former performs type coercion (meaning it attempts to convert the operands to the same type before making the comparison) while the latter does not. Similarly, != and !== differ in that the former also performs type coercion

*/

// logical operator

/*

In JavaScript, there are several logical operators that can be used to evaluate the truthiness or falsiness of expressions. These include:

&& (and)
|| (or)
! (not)

The && operator returns true if both expressions on either side of it evaluate to true, and false otherwise. The || operator returns true if at least one of the expressions on either side of it evaluates to true, and false otherwise. The ! operator is a logical negation operator, it will invert the boolean value of an expression, if the expression is true, ! will make it false and if the expression is false, ! will make it true.

For example:

(5 > 3) && (2 < 4) // true
(5 > 3) || (2 > 4) // true
!(5 > 3) // false

*/

/*
Conditional operator : 


In JavaScript, the conditional (ternary) operator is a shorthand way to write an if-else statement. It has the following syntax:


condition ? expression1 : expression2
The condition is evaluated as a boolean expression, if it is true, the operator returns the value of expression1, otherwise it returns the value of expression2.

For example:


let x = 5;
let y = (x > 0) ? "positive" : "non-positive";
console.log(y); // "positive"


*/

/*

type of operator 

let x = 5;
console.log(typeof x); // "number"

let y = "Hello";
console.log(typeof y); // "string"

let z;
console.log(typeof z); // "undefined"

let obj = {};
console.log(typeof obj); // "object"

let func = function() {};
console.log(typeof func); // "function"


*/

/*
 More operator example : 


 The unary plus + operator: used to convert a value to a number, if it's not already one.

let x = "5";
console.log(+x); // 5
The unary negation - operator: used to negate a numeric value.

let x = 5;
console.log(-x); // -5
The logical NOT ! operator: used to invert the boolean value of an expression.

let x = true;
console.log(!x); // false
The increment ++ and decrement -- operators: used to add or subtract 1 from a value, respectively.

let x = 5;
console.log(++x); // 6
let y = 10;
console.log(--y); // 9
The delete operator: used to delete a property from an object.

let obj = { x: 5 };
console.log(obj.x); // 5
delete obj.x;
console.log(obj.x); // undefined
The void operator: used to evaluate an expression and return undefined

let x = 5;
console.log(void x); // undefined
The typeof operator: used to check the type of a variable or value.

let x = "hello";
console.log(typeof x); // "string"
The await operator: used to wait for a promise to resolve or reject before moving on to the next line of code in an async function

async function getData() {
    let data = await fetch("https://someapi.com/data");
    let jsonData = await data.json();
    console.log(jsonData);
}



*/



/*****************More Important Operator Example **************** */

/*
The spread operator ... is used to expand an array or object and allow its elements or properties to be used in a new context.

example for array : 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]


example for object  : 

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combined = {...obj1, ...obj2};
console.log(combined); // {a: 1, b: 2, c: 3, d: 4}

The destructuring operator:

The destructuring operator {} or [] is used to extract data from arrays or objects and assign them to variables.


let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


let obj = {a: 1, b: 2, c: 3};
let {a, b, c} = obj;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


Computed property names are used to create dynamic property names for an object literal.


let prop = "x";
let obj = {
  [prop]: 5
};
console.log(obj.x); // 5


The in operator is used to check if an object has a certain property.

let obj = {a: 1, b: 2, c: 3};
console.log("a" in obj); // true
console.log("d" in obj); // false



The instanceof operator is used to check the type of an object or if an object is an instance of a certain class.

class MyClass {}
let obj = new MyClass();
console.log(obj instanceof MyClass); // true
console.log(obj instanceof Object); // true
console.log(obj instanceof Array); // false


These operators are powerful tools in JavaScript that allow you to manipulate data and make your code more efficient and readable.

*/