// a function is said to be first class function that can follow some rules 

//  1. A function can be stored as variables 



 let total = function(a,b){
    return a+b;
 }

//  console.log(total(5,15));


 //  2. A function can be stored as array 
let sum = total

  
 let arr = [];
  arr.push(sum);
//  console.log(arr[0](3,6));


            // let m=[1,2,3,8,9,8,7]
            // let pp = m.push(5) // pp show the length of the array 
            // console.log(pp); 


// 3. function is stored as objecf

const obj ={
    a :"fist class ",
     summation : total(6,6)
}

console.log(obj.summation);  // this is used as object 



//4. a function is said to be first class that used anywhere  any time 

setTimeout(() => {
    
    console.log(total(8,10));
}, 3000);


// Passing a function as an argument to another function:


function squre(data){
    console.log(data*data);
}

function Numer(n){
    return squre(n);
}

Numer(5);


// final rule :  Returning a function from another function:

function createGreeting(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}

const sayHello = createGreeting("John");
console.log(sayHello());
console.log(createGreeting("John")());
