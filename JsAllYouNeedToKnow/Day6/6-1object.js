const std = {
    stdName : "Mim",
    Roll : 150132,
    dept:'cse'
}

// add property in object 

   std.university = "pust"
   std.gender = "Male"

// console.log(std);


// see the object value using . dot notation 

// console.log(std.Roll);


// see the object value using array notation 

 console.log(std['Roll']);


 // remove object property 
console.log('Before Delete property :: ',std);
delete std.gender ;
console.log("After Delete Std property :: ",std);