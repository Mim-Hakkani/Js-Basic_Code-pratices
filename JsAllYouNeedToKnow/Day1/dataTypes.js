// premitive 

  // Number 

   let num1 = 5;  // int 
   let num2 = 5.6  // float 

  // String

    let name = "Golam Hakkani mim "  // using double quotes 
    let companyName = 'Ehsan Marketing '  // using single quotes 
    let jobPost = `React Js Developer `   // using backtic 

  // Boolean 

   let isTrue = true 
   let isFlase = false 

  // null 

   let empty = null  // assign but null not undefined 

  // undefined 

   let x;
   console.log(x); // output undefined 

  // symbol 

let sym1 = Symbol();
let sym2 = Symbol("mySymbol");

console.log(Symbol("mySymbol"));

// Symbols are unique, meaning that two symbols can never be the same. They are also immutable, meaning they cannot be altered once they are created. This makes them useful for creating unique keys for object properties, for example.

// Here is an example of how to create a symbol:

// Copy code

// let sym1 = Symbol();
// let sym2 = Symbol("mySymbol");
// console.log(sym1 === sym2); // Output: false

// In the example above, sym1 and sym2 are two different symbols, even though they have the same description "mySymbol".

// Symbols can be used as property keys for objects and you can use Object.getOwnPropertySymbols() method to get the symbol properties of an object.

// Copy code
// let obj = {
//   [sym1]: "symbol1",
//   [sym2]: "symbol2",
//   name: "John"
// };
// console.log(Object.getOwnPropertySymbols(obj)); 
// Output: [Symbol(), Symbol(mySymbol)]

// As you can see in the above example, the symbols are returned, but the property name is not returned because it is not a symbol.




// nonPremitive 

// object 
   
    // Array 
    // Function 
    // Object 