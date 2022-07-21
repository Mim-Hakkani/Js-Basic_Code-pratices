//variable in js 

var a = 10;
let aa = 20;
const pp = 30

// console.log(a,aa,pp);

// global scope 

if(aa===20){
//  console.log('global scope var::',a);
 let name = 'mim';
//  console.log('block scope var::',name);
}

//  console.log('block scope var 2 check::',name); it is not working for block scope


// about let variable 
    /*
            1. reused the double name 
            2. connot use value outside the block sccope 
            3. value is changable by using let constrant 

    */


// hoisting in js 

personalname = 'golam hakkani mim';
var personalname;

// console.log('hoisting :: ',personalname)
 // it is perfectly ok when using variable 


// anotherName = kibria ;
// let anotherName;

// console.log('ishosted',anotherName); // it is not working in hoisted becauese of using let ,, 


// wellocome to the const world 

const price = [10,25,64,85,687];
// console.log(price);
price.push(155);

// console.log(price);

price.pop();
// console.log(price);


//arithmetic operator + - * / % ++ -- 

let aamas =5;
let b = 6;
let z = a+b; // addition , substraction , multiplication , division , percent 


// assign operator is js  = == === >= <= > < ! != ^= >>= >>>= <<= <<<= 

a ===5 ;
if(a<=b) {
    // console.log(true);
}
else 
{
    // console.log(false );
}


//logical operator is here &&, || , !

if(a&&b){
    // console.log('this is the and operator ');
}

// to check type we can use instance , and type of operator 

 const pps = typeof (a);
//  console.log(pps);


 // function in javaScript 

 function hakkani(){
    let num1 = 50;
    let num2 = 100;
    return num1+num2;
 }

//  console.log(hakkani());


 function summation( nn1,nn2 = 'mim'){
    // console.log(nn1,nn2);
    let sum = nn1+nn2;
    return sum;
 
 }

 const total = summation(5);

//    console.log(total);


//wellcome to the javaScript Object 

const cars = {
    name :'toyota',
    weight:'500kg',
    color:'white',
    price:1452545,
    start:function (){
        //use use the parenet property in same function 
        // console.log('The Car name is from function:',this.name +' '+ this.color);
        // console.log('cholo na gure ase ojanateee,,,');
    },

    drive:function(){
        // console.log('apni ki drive paren vaiii ,, ami to pari na geee');
    }
}

// console.log(cars.name);
// console.log(cars['weight']);
// cars.start();


/* Complete the objects function in js up to the center  */


// event lister in javascript 

function demo(){
   // console.log('golam hakkani mim');
}


// string method 

 let s_name = "cocakola,banana,cocunut|";

 //.log(s_name.slice(0,9)); // slice the data 

 //console.log(s_name.toUpperCase()); // show the uppercase letter 

 const replace = s_name.replace("col","pok");
//  console.log(replace);


 // split in string 

 const letters = "amade desher nam bangladesh"
//  console.log(letters.split(" "));


 // js string search options 

 const stringSearch = 'this is the ehsan marketing that i have seen good marketing site ' 

//  console.log(stringSearch.indexOf("marketing"));
//  console.log(stringSearch.indexOf("good",25)); 2nd parameter start the position of search 

// laseIndexOf is the reverse of the first index 
//  console.log(stringSearch.lastIndexOf("seen")); 






