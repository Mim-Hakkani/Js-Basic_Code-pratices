// //variable in js 

// const { some } = require("lodash");

// var a = 10;
// let aa = 20;
// const pp = 30

// // console.log(a,aa,pp);

// // global scope 

// if(aa===20){
// //  console.log('global scope var::',a);
//  let name = 'mim';
// //  console.log('block scope var::',name);
// }

// //  console.log('block scope var 2 check::',name); it is not working for block scope


// // about let variable 
//     /*
//             1. reused the double name 
//             2. connot use value outside the block sccope 
//             3. value is changable by using let constrant 

//     */


// // hoisting in js 

// personalname = 'golam hakkani mim';
// var personalname;

// // console.log('hoisting :: ',personalname)
//  // it is perfectly ok when using variable 


// // anotherName = kibria ;
// // let anotherName;

// // console.log('ishosted',anotherName); // it is not working in hoisted becauese of using let ,, 


// // wellocome to the const world 

// const price = [10,25,64,85,687];
// // console.log(price);
// price.push(155);

// // console.log(price);

// price.pop();
// // console.log(price);


// //arithmetic operator + - * / % ++ -- 

// let aamas =5;
// let b = 6;
// let z = a+b; // addition , substraction , multiplication , division , percent 


// // assign operator is js  = == === >= <= > < ! != ^= >>= >>>= <<= <<<= 

// a ===5 ;
// if(a<=b) {
//     // console.log(true);
// }
// else 
// {
//     // console.log(false );
// }


// //logical operator is here &&, || , !

// if(a&&b){
//     // console.log('this is the and operator ');
// }

// // to check type we can use instance , and type of operator 

//  const pps = typeof (a);
// //  console.log(pps);


//  // function in javaScript 

//  function hakkani(){
//     let num1 = 50;
//     let num2 = 100;
//     return num1+num2;
//  }

// //  console.log(hakkani());


//  function summation( nn1,nn2 = 'mim'){
//     // console.log(nn1,nn2);
//     let sum = nn1+nn2;
//     return sum;
 
//  }

//  const total = summation(5);

// //    console.log(total);


// //wellcome to the javaScript Object 

// const cars = {
//     name :'toyota',
//     weight:'500kg',
//     color:'white',
//     price:1452545,
//     start:function (){
//         //use use the parenet property in same function 
//         // console.log('The Car name is from function:',this.name +' '+ this.color);
//         // console.log('cholo na gure ase ojanateee,,,');
//     },

//     drive:function(){
//         // console.log('apni ki drive paren vaiii ,, ami to pari na geee');
//     }
// }

// // console.log(cars.name);
// // console.log(cars['weight']);
// // cars.start();


// /* Complete the objects function in js up to the center  */


// // event lister in javascript 

// function demo(){
//    // console.log('golam hakkani mim');
// }


// // string method 

//  let s_name = "cocakola,banana,cocunut|";

//  //.log(s_name.slice(0,9)); // slice the data 

//  //console.log(s_name.toUpperCase()); // show the uppercase letter 

// //  const replace = s_name.replace("col","pok");
// //  console.log(replace);


//  // split in string 

// //  const letters = "amade desher nam bangladesh"
// //  console.log(letters.split(" "));


//  // js string search options 

// //  const stringSearch = 'this is the ehsan marketing1 that i have seen good marketing2 site ' 

// //  console.log(stringSearch.indexOf("marketing"));
// //  console.log(stringSearch.indexOf("good",25)); 2nd parameter start the position of search 

// // laseIndexOf is the reverse of the first index 
// //  console.log(stringSearch.lastIndexOf("seen")); 


// // search 
// //    it is not used the 2nd parameter 

// // console.log('the lastindex of ::',stringSearch.search('marketing'));


// // match in search 
//     // const match = stringSearch.match(/marketing/g);
//     // console.log('thsis is the string match function ::',match);


// // console.log(stringSearch.includes('marketings'));

// // Note: another search function is also added that is : 

//         // startsWith('string')
//         // startsWith('string','parameter')

//         // endsWith('string')
//         // endsWith('string',parameter )



// // string template leterals 

// const company_name = `ehsan marketing `;
// let salary =20000;

// // console.log(`amader company name is ${company_name} and my salary is ${salary}`);

 

//  // Nunbers in js 

// //  Note : int number have 15 presission
// //         floating number have 17 pression 
        
    
// // Summation : 

// //   let as = 555;
// //   let bs = 1;
// //   console.log((as+bs));


// // const ps = 10;
// // const qs = 12
// // const nn = "10";
// // console.log(ps+qs+nn);   
// // console.log(nn+ps+qs);  

// // js code exexute in left to right  and first prioty is string when plus 

// // Note number + string  = string 



// // js Numberic string 
// //    if the property is number inside of string like as "100" without plus operator it reads it as a number 

// //   let ns = "100";
// //   let ns1 = "10";

// //   console.log(ns/ns1);



// // Number method in js 

// // toString = converts a number to string 

//     //  let n = 123
//     //  console.log(typeof n);   // out : number type 
//     //  let cstring = n.toString();
//     //  console.log(typeof cstring);


// // toFixed = converts a number with fixed .. it returns an string 
//         // let fnum = 9.5617;
//         // console.log(fnum.toFixed(2));

// //toPresition = it returns a string and with the length

//     // let numpre = 1.25487
//     // console.log(numpre.toPrecision(1));

// //toValue = converts a number in a number 
    
//     // let vnum = 150
//     // console.log(typeof vnum.valueOf());


//     // Number method part 2 

//         // parseFloat() = convets a string into float number ,, only 
//         // parseInt()
//         // Number()

//     //   example   Number : 

//         // Number(true);  1
//         // Number(false);  1
//         // Number("10"); 10
//         // Number("  10"); 10
//         // Number("10  "); 10
//         // Number(" 10  "); 10
//         // Number("10.33"); 10.33
//         // Number("10,33"); nan
//         // Number("10 33"); nan
//         // Number("John");  nan 
    
//         // parseInt example :
//         //  parseInt("-10");
//         // parseInt("-10.33");
//         // parseInt("10");
//         // parseInt("10.33");
//         // parseInt("10 20 30");
//         // parseInt("10 years");
//         // parseInt("years 10");

// // parseFloat("10"); 10.00
// // parseFloat("10.33"); 10.33
// // parseFloat("10 20 30"); 10
// // parseFloat("10 years"); 10 
// // parseFloat("years 10"); nan


// /* Array methad and properties  */

// // declare : 
// // let arr = [1,2,3,4,5];
// // console.log(arr);

// // check length : arr.length 

// // see the value using loop 

//     // for(i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     // }


// // see the array value using foreach loop 

//     // function checkValue(value){
//     //     console.log(value+'mim');
//     // }

//     // arr.forEach(checkValue)


//  // array check 

// //  step 1 : 
// //         let checkarr = Array.isArray(arr);
// //         console.log(checkarr);

// // step 2 : 

// //   let check2 = arr instanceof Array;
// //   console.log(check2);



// // Array Method in javaScripts 

// // 1. toString  => see all array value separated by comma 
// // 2. join  => see all array value separated by ja dibo tai
// // 3. push  => add an element in last index
// // 4. pop  =>  remove last index
// // 5. shift  => remove first index
// // 6. unshift  => add first index


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // let farr = fruits.toString();
// // console.log(farr);

// // Merging (Concatenating) 2 Arrays

// // const fruites2 = ["pieanaple","guava"]

// // let merge2array = fruits.concat(fruites2);
// // console.log(merge2array);

// // Merging or concating 3 Arrays 

// // const fruits3 =["Kismis"];

// // let allfruits =  fruits3.concat(fruites2,fruits)
// // console.log('concat all array is ::',allfruits);


// // Add elements in array in another way 

// //  const arrslice =fruits.splice(2,"badena","kolma") ;

// //  console.log(fruits.splice(0,5,"Lemon", "Kiwi"));


// // const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruitss.slice(2);
// // console.log(citrus);

// // const data = ['a','b','c']
// // console.log(data);

// //  data.splice(1,0,'e','f');
// // console.log(data);


// // data.slice(2);
// // console.log(data);

// // Array method sections 

// // sort 
//     // const hardware =['zzebra','bambolo','yelloe','kopalo','asolo'];
//     // hardware.sort();
//     // console.log(hardware);


//     //revese 
//         // hardware.reverse()
//         // console.log('reverse method :',hardware);

// // Sort in number 

// // const snumber = [10,52,65,84,78,5,15]
// // snumber.sort(function(a,b){
// //     return a-b;
// // });
// // console.log('sort the number :: ',snumber);

// // //reverse number 
// // const rnumber = [10,52,65,84,78,5,15]
// // rnumber.sort(function(a,b){
// //     return b-a;
// // });
// // console.log('sort the number :: ',rnumber);



// // object item sort 

// // const items = [
// //     {    name:'mim',byear:2001 },
// //     {    name:'midm',byear:1995},
// //     {    name:'mimf',byear:2025 },
// // ]

// // items.sort(function(a,b){

// //     return a.byear -b.byear
// // });

// // console.log(items);



// // Array Iteration 

// //  1. foreach 
// //  2.map
// //  3.filter 
// //  4.find 
// //  5.reduce 
// //  6.every
// //  7.some
// //  8.indexof 
// //  9.lastindexof
// //  10.keys
// //  11.entites
// //  12.includes


// //  For Each : 
// // const ffprices = [10,20,35,40,50]

// // function handleprice(value,index,array){
// // console.log('foreach',value);
// // eta kiso return kore na 
// // }
// // const valueForeach = ffprices.forEach(handleprice) ;

// // console.log('value of foreach ::',valueForeach);

// // Map Method 

// //   const ffprices2 = [10,12,14,15,187]

// //   function handlePrice2 (value){
// // //    console.log('Value of Map ::',value);
// //     return value +1;
// //   }
// //   const valuemap = ffprices2.map(handlePrice2);
// //   console.log(valuemap);



// //   function handlePricefilter (value){
   
// //     console.log('filter value is :: ',value );
// //     return value >=15;
// //   }
// // const valueFilter = ffprices2.filter(handlePricefilter)

// // console.log(valueFilter);



// // const ageFind = [10,20,14,26,44];

// // const handleFind=(value)=>{
 
// //     return value<=10

// // }

// // let findValue = ageFind.find(handleFind);

// // console.log(findValue);



// // const ageFind = [10,20,14,26,44];
// // let indexValue = ageFind.indexOf(44); check the index of the array elements 
// // console.log(indexValue);


// //  Array Reduce 


// // console.log('mimsad');

// // js Date Method 

// const d = new Date(); // date format is shown full date 
// console.log('Date is :',typeof d.getDate()); // if i get individual date .hour,minutes , date 


// const d = new Date();
// d.setFullYear(2020, 11, 3);
// console.log(d);


// JavasCript Math Function 

//  const jsNumber = 6.45; //output 7
//  let mnumber = Math.round(jsNumber) ;
//  console.log('math cell:',Math.ceil(6.1)); //output 7
//  console.log('math floor:',Math.floor(6.99)); //output 7
//  console.log('math truncate:',Math.trunc(4.45)); //output 4
//  console.log('math power:',Math.pow(2,3)); //output 2^3
//  console.log('math borgoo:',Math.sqrt(64)); //output 8
//  console.log('math borgomul:',Math.sqrt(64)); //output 8
//  console.log('math borgomul:',Math.abs(-2.5)); //output 2.5
//  console.log('math max:',Math.max(5,1,25)); //output 25
//  console.log('math min:',Math.min(2,58,1)); //output 1
//  console.log('math random:',Math.random()); //output randomly


// Js Boolean Types 

// it returns true or false value 

//  it works when the condition is == true 

//  if the value is = 0,null,"",undefined,false,NAN,negative value 
 

/* Comparision operator  */

// Comparison and Logical operators are used to test for true or false.

//  JS Comparision operator :  ==,===,>,<,<=,>=,!=,!==,
// Js Logical Operator : &&,||,!
// Js Ternary operator : condition ? true ? false

// if in js 
// let k=5,kk=6;
// console.log(6<5 ? 'true':'mfalse');
// if(k<kk){
//     console.log('data is true then value is shown');
// }

// Example of if elseif 

// if('mim'){
//  console.log('mim');
// }
// else if('hakkani'){
//  console.log('hakkani')
// }
// else{
//     console.log('dfata is none ')
// }


// js Switch case 

// let name = 'mm'

// switch(name){
//     case 'aa' :
//         console.log('ami to aaa');
//         break;
//     case 'bb':
//         console.log('ami to bb');
//         break;
//     case 'mm':
//         console.log('ami ti asol ');
//         break;
//     default : 
//     console.log('kono data nai re');
// }


// Js Loops : 
 
    //  for (let i = 0; i < 5; i++) {
    //   text += "The number is " + i + "<br>";
    // }


    // let i = 1 ;

    // while(i<5){
    //     console.log(i);
    //     i++
    // }


    // For in Loops 

    // const person = {
    //     name:'mim',
    //     age:28,
    //     color:"ddd",
    //     gender:'male'
    // }

 
//  if used object keys then used for in loop
    // for(let keys in person){
    //     console.log('get person keys :',person[keys]);
    // }


  // for of loop is used in

         const val = [4,'mim',25.5,'adff']
                // for(let i of val){
                //     console.log(i);
                // }
         

            // val.forEach(element =>
            //     console.log(element)
            // );

            // val.map(item=>console.log(item))

          
            // console.log(  val.filter(a));

    "use strict";

    hdf = 5;
    console.log(hdf);

    // alert('google is my best ')

    // const prommt = prompt('What is your gross salary ?');

    const tttt = confirm('Are you Student ?');
    console.log(tttt);
    if(tttt){
        console.log('Golam Hakkani mim');
    }
    else{
        console.log('ehsan marketing is done ');
    }
        
    // console.log('my gross salary is ::',prommt);
 