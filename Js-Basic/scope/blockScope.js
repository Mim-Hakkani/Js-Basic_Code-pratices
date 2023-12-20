let know ="C" // behaviur as global scope in this section 

function Learn(language){
     know = language;
}

Learn("C++");

console.log("data::",know);

{
    let a = 5
    console.log("value is :",a);
}

{
    let a =10;
    console.log("reassign value is :",a);
}

// not allow to ressign 
// let a = 40;
// let a = 50;

// working data 

// let a;
// a = 40;
// console.log("data is :",a);


// ************************  play with const **********************

// const data ;   ]
    
   // getting error cause if initialize data with const then assign value must 

// data = "dasdasd";
// console.log("data:",data);


// let reassign but const not reassign

const Student ={
    "name":"mim"
}

console.log(Student.name);
Student.name = "Hakkani"

console.log(Student.name);

// remember that :: in array and object property value / index value  is changed cauese it is mutable .. but not assign agian it is not creassign 