// Let 

    // Variables defined with let can not be redeclared.
    // Variables defined with let must be declared before use.
    // Variables defined with let have block scope.

// Const 

    // Variables defined with const cannot be Redeclared.
    // Variables defined with const cannot be Reassigned.
    // Variables defined with const have Block Scope.

// When to use JavaScript const?

        // Always declare a variable with const when you know that the value should not be changed.
        // Use const when you declare:
        // A new Array
        // A new Object
        // A new Function
        // A new RegExp


// Arrow Functions

        // Arrow functions allows a short syntax for writing function expressions.
        // You don't need the function keyword, the return keyword, and the curly brackets.
    
        // Example normal function 
        // // ES5
        // var x = function(x, y) {
        //    return x * y;
        // }
        
        // // ES6
        // const x = (x, y) => x * y;

        // Arrow functions do not have their own this. They are not well suited for defining object methods. 
        // Arrow functions are not hoisted. They must be defined before they are used.
        // Using const is safer than using var, because a function expression is always a constant value.
        // You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

// The Spread (...) Operator

        // The ... operator expands an iterable (like an array) into more elements:

        // const q1 = ["Jan", "Feb", "Mar"];
        // const q2 = ["Apr", "May", "Jun"];
        // const q3 = ["Jul", "Aug", "Sep"];
        // const q4 = ["Oct", "Nov", "May"];
        // const year = [...q1, ...q2, ...q3, ...q4];

        //  output : "Jan", "Feb", "Mar","Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "May"

        // Example2: 
        // const numbers = [23,55,21,87,56];
        // let maxValue = Math.max(...numbers);



//  The For/Of Loop
//         The JavaScript for/of statement loops through the values of an iterable objects.
        
//         for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
        
//         The for/of loop has the following syntax:
        
//         for (variable of iterable) {
//           // code block to be executed
//         }
//         variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
        
//         iterable - An object that has iterable properties.
        
//         Looping over an Array
//         Example
//         const cars = ["BMW", "Volvo", "Mini"];
//         let text = "";
        
//         for (let x of cars) {
//           text += x + " ";
//         }
//         Looping over a String
//         Example
//         let language = "JavaScript";
//         let text = "";
        
//         for (let x of language) {
//             text += x + " ";
//         }
//         Learn more in the chapter: JavaScript Loop For/In/Of.
        
// JavaScript Maps

//         Being able to use an Object as a key is an important Map feature.      
//         Example
//         const fruits = new Map([
//         ["apples", 500],
//         ["bananas", 300],
//         ["oranges", 200]
//         ]);
   
        
// JavaScript Sets
//         Example
//         // Create a Set
//         const letters = new Set();
        
//         // Add some values to the Set
//         letters.add("a");
//         letters.add("b");
//         letters.add("c");
      
        
// JavaScript Classes
//         JavaScript Classes are templates for JavaScript Objects.
        
//         Use the keyword class to create a class.
        
//         Always add a method named constructor():
        
//         Syntax
//         class ClassName {
//           constructor() { ... }
//         }


//         Example
//         class Car {
//           constructor(name, year) {
//             this.name = name;
//             this.year = year;
//           }
//         }
//         const myCar1 = new Car("Ford", 2014);


//         The example above creates a class named "Car".
        
//         The class has two initial properties: "name" and "year".
 
//         A JavaScript class is not an object.
//         It is a template for JavaScript objects.
        
//         Using a Class
//         When you have a class, you can use the class to create objects:
        
//         Example
//         const myCar1 = new Car("Ford", 2014);
//         const myCar2 = new Car("Audi", 2019);
        
//         Learn more about classes in the the chapter: JavaScript Classes.
        
// JavaScript Promises
// A Promise is a JavaScript object that links "Producing Code" and "Consuming Code". 
// "Producing Code" can take some time and "Consuming Code" must wait for the result.
        


//         Promise Syntax
//         const myPromise = new Promise(function(myResolve, myReject) {
//         // "Producing Code" (May take some time)
        
//           myResolve(); // when successful
//           myReject();  // when error
//         });
        
//         // "Consuming Code" (Must wait for a fulfilled Promise).
//         myPromise.then(
//           function(value) { /* code if successful */ },
//           function(error) { /* code if some error */ }
//         );



//         Example Using a Promise
//         const myPromise = new Promise(function(myResolve, myReject) {
//           setTimeout(function() { myResolve("I love You !!"); }, 3000);
//         });
        
//         myPromise.then(function(value) {
//           document.getElementById("demo").innerHTML = value;
//         });
        
//         Learn more about Promises in the the chapter: JavaScript Promises.
        
//         The Symbol Type
//         A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
        
//         It represents a unique "hidden" identifier that no other code can accidentally access.
        
//         For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
        
//  Using Symbol() to create a unique identifiers, solves this problem:
        
//         Example
//         const person = {
//           firstName: "John",
//           lastName: "Doe",
//           age: 50,
//           eyeColor: "blue"
//         };
        
//         let id = Symbol('id');
//         person[id] = 140353;
//         // Now person[id] = 140353
//         // but person.id is still undefined
//         Note
//         Symbols are always unique.
        
//         If you create two symbols with the same description they will have different values:
        
//         Symbol("id") == Symbol("id"); // false

//  Default Parameter Values

//         ES6 allows function parameters to have default values.
        
//         Example
//         function myFunction(x, y = 10) {
//           // y is 10 if not passed or undefined
//           return x + y;
//         }
//         myFunction(5); // will return 15
// Function Rest Parameter
//         The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
        
//         Example
//         function sum(...args) {
//           let sum = 0;
//           for (let arg of args) sum += arg;
//           return sum;
//         }
        
//         let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//  String.includes()
//         The includes() method returns true if a string contains a specified value, otherwise false:
        
//         Example
//         let text = "Hello world, welcome to the universe.";
//         text.includes("world")    // Returns true
//  String.startsWith()
//         The startsWith() method returns true if a string begins with a specified value, otherwise false:
        
//         Example
//         let text = "Hello world, welcome to the universe.";
        
//         text.startsWith("Hello")   // Returns true
//  String.endsWith()
//         The endsWith() method returns true if a string ends with a specified value, otherwise false:
        
//         Example
//         var text = "John Doe";
//         text.endsWith("Doe")    // Returns true
// Array.from()
//         The Array.from() method returns an Array object from any object with a length property or any iterable object.
        
//         Example
//         Create an Array from a String:
        
//         Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
// Array keys()

//         The keys() method returns an Array Iterator object with the keys of an array.
        
//         Example
//         Create an Array Iterator object, containing the keys of the array:
        
        // const fruits = ["Banana", "Orange", "Apple", "Mango"];
        // const keys = fruits.keys();

        // let text = "";
        // for (let x of keys) {
        // //   text += x + "<br>";
        // console.log(x);
        // }
// Array find()
//         The find() method returns the value of the first array element that passes a test function.
        
//         This example finds (returns the value of ) the first element that is larger than 18:
        
//         Example
//         const numbers = [4, 9, 16, 25, 29];
//         let first = numbers.find(myFunction);
        
//         function myFunction(value, index, array) {
//           return value > 18;
//         }
//         Note that the function takes 3 arguments:
        
//         The item value
//         The item index
//         The array itself
// Array findIndex()
//         The findIndex() method returns the index of the first array element that passes a test function.
        
//         This example finds the index of the first element that is larger than 18:
        
//         Example
//         const numbers = [4, 9, 16, 25, 29];
//         let first = numbers.findIndex(myFunction);
        
//         function myFunction(value, index, array) {
//           return value > 18;
//         }
//         Note that the function takes 3 arguments:
        
//         The item value
//         The item index
//         The array itself
//         New Math Methods
//         ES6 added the following methods to the Math object:
        
// Math.trunc()
// Math.sign()
// Math.cbrt()
// Math.log2()
// Math.log10()
// The Math.trunc() Method
//         Math.trunc(x) returns the integer part of x:
        
//         Example
//         Math.trunc(4.9);    // returns 4
//         Math.trunc(4.7);    // returns 4
//         Math.trunc(4.4);    // returns 4
//         Math.trunc(4.2);    // returns 4
//         Math.trunc(-4.2);    // returns -4
//         The Math.sign() Method
//         Math.sign(x) returns if x is negative, null or positive:
        
//         Example
//         Math.sign(-4);    // returns -1
//         Math.sign(0);    // returns 0
//         Math.sign(4);    // returns 1
//         The Math.cbrt() Method
//         Math.cbrt(x) returns the cube root of x:
        
//         Example
//         Math.cbrt(8);    // returns 2
//         Math.cbrt(64);    // returns 4
//         Math.cbrt(125);    // returns 5
//         The Math.log2() Method
//         Math.log2(x) returns the base 2 logarithm of x:
        
//         Example
//         Math.log2(2);    // returns 1
//         The Math.log10() Method
//         Math.log10(x) returns the base 10 logarithm of x:
        
//         Example
//         Math.log10(10);    // returns 1
//         New Number Properties
//         ES6 added the following properties to the Number object:
        
//         EPSILON
//         MIN_SAFE_INTEGER
//         MAX_SAFE_INTEGER
//         EPSILON Example
//         let x = Number.EPSILON;
//         MIN_SAFE_INTEGER Example
//         let x = Number.MIN_SAFE_INTEGER;
//         MAX_SAFE_INTEGER Example
//         let x = Number.MAX_SAFE_INTEGER;
//         New Number Methods
//         ES6 added 2 new methods to the Number object:
        
// Number.isInteger()
// Number.isSafeInteger()
//         The Number.isInteger() Method
//         The Number.isInteger() method returns true if the argument is an integer.
        
//         Example
//         Number.isInteger(10);        // returns true
//         Number.isInteger(10.5);      // returns false
//         The Number.isSafeInteger() Method
//         A safe integer is an integer that can be exactly represented as a double precision number.
        
//         The Number.isSafeInteger() method returns true if the argument is a safe integer.
        
//         Example
//         Number.isSafeInteger(10);    // returns true
//         Number.isSafeInteger(12345678901234567890);  // returns false
//         Safe integers are all integers from -(253 - 1) to +(253 - 1).
//         This is safe: 9007199254740991. This is not safe: 9007199254740992.
        
//         New Global Methods
//         ES6 added 2 new global number methods:
        
// isFinite()
// isNaN()
//         The isFinite() Method
//         The global isFinite() method returns false if the argument is Infinity or NaN.
        
//         Otherwise it returns true:
        
//         Example
//         isFinite(10/0);       // returns false
//         isFinite(10/1);       // returns true
//         The isNaN() Method
//         The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:
        
//         Example
//         isNaN("Hello"); 
//               // returns true
// Object entries()

//         Example
//         Create an Array Iterator, and then iterate over the key/value pairs:
        
//         const fruits = ["Banana", "Orange", "Apple", "Mango"];
//         const f = fruits.entries();
        
//         for (let x of f) {
//           document.getElementById("demo").innerHTML += x;
//         }
//         The entries() method returns an Array Iterator object with key/value pairs:
        
//         [0, "Banana"]
//         [1, "Orange"]
//         [2, "Apple"]
//         [3, "Mango"]
        
//         The entries() method does not change the original array.
        
//  Modules
//         Modules are imported in two differen ways:
        
//         Import from named exports
//         Import named exports from the file person.js:
        
//         import { name, age } from "./person.js";
        
//         Import from default exports
//         Import a default export from the file message.js:
        
//         import message from "./message.js";
