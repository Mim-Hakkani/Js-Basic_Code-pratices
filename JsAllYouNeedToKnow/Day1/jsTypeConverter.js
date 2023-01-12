// String to Number or int -> float or float -> int 
   
    // parseFloat
    // parseInt

//  parseInt() and parseFloat(): These functions can be used to convert strings to integers or floating-point numbers, respectively.

    // Example : 

    const id = "150132"
    const salary = "27500.35"

    // console.log(parseInt(id)); // convert to int and number type 
    // console.log(parseInt(salary)); // convert string to Number and float to int 

    // method 2 : Using Number 

    // Number(): The Number() function can be used to convert other data types (such as strings or booleans) to numbers.


// convert string to number 
    // console.log('Salary :: ',Number(salary));  
    
    // console.log(Number(true));  // Boolean true is convet 1 

   let num1 = parseInt("123"); // Output: 123 (number)
   let num2 = parseFloat("3.14"); // Output: 3.14 (number)

    /*********************** String() ************************/
    let str1 = String(123); // Output: "123" (string)
    let str2 = String(true); // Output: "true" (string)

    /*********************** toString() **********************/

    let num6  = 50;
    let convertNum6 = num6.toString()
    // console.log('::',typeof(convertNum6));

    let num = 12;
// console.log(num.toString()); // Output: "12" (string)
let bool = true;
// console.log(bool.toString()); // Output: "true" (string)

    /******************** JSON.stringify() *******************/

// JSON.stringify(): This method can be used to convert JavaScript objects to strings in JSON forma

 const student = {
    name : "mim",
    roll : 150132
 }

const stfy = JSON.stringify(student);
// console.log(stfy); 

// output {"name":"mim","roll":150132}



    /******************** JSON.parse() *******************/
    
     const reverse = JSON.parse(stfy)
   console.log(reverse); // output { name: 'mim', roll: 150132 }