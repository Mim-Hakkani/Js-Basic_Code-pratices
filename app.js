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

