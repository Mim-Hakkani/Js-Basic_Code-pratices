const hellow = ()=>{
    console.log("hiii");
    // return;  js function default return undefiend ,
 }

console.log(hellow());

// difference between expression and statement 

//  statement : is the line of code  let a = 5 ; // 
//  expression : evalueate a value  // if(a>1) 




 // named function expression 

 const name = function myNames(){
    console.log("hiiii mim ");
 };

 name()


//  arrow function 


const test = ()=>{
    console.log("hellow world!!");

    return{
        a:5,
        b:10,
        c:10
    
    }
}

console.log(test()); 


// anonymous function 

function learning(){
    return ()=>{
        console.log("je function er kono nam nai ... and ekta funtion er return e jodi r ekta function thake taile ");
    }


    // only one return is used in one function 
    return function(){
        console.log("hiiiii");
    }
}

learning()() // call anonimus function in two way 
 