/*
A pure function is a function in JavaScript that, given the same input, will always return the same output and has no side effects. It does not modify any variables outside of its scope, and it does not rely on any external state

example : 

 function add(a, b) {
    return a + b;
}

This function takes in two arguments a and b, and returns their sum. It does not modify any variables outside of its scope, and it does not rely on any external state. Therefore, it can be considered a pure function.

*/


// pure function 

function squre(n){
    return n*n;
}
// the same input, will always return the same output and has no side effects

// console.log(squre(2));
// console.log(squre(3));
// console.log(squre(4));



let n = 5 ;

console.log('Before change the value of n :: ',n);

// bellow the function follow the first rules but it has side effect change the value of n after call the function so it is not a pure function 

function changeVariables(n){
    
    return n;
}
n= changeVariables(4)
console.log('after change value of n :: ',n);