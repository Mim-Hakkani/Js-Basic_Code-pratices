// . Scopes can be divided into global and local. A variable or function declared outside of any function has a global scope and can be accessed from anywhere in the program

// A variable or function declared inside a function has a local scope and can only be accessed within that function.

 // Additionally, some programming languages also have block-level scoping, where variables declared inside a block (e.g. if statement, for loop) can only be accessed within that block.

//  in inner function :  can access parents all value in child but parents can not access child value 


// let  a = 5  // global scope 


// parent function 
function something(){
    let b  = 45

    // child function 
    function anything(){  
       let a = 14;
       console.log('i am from anythings :: ',b);  // b is accessable 
    }

    // console.log(a);  // undefined 


    anything()
}

something()