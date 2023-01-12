const str1 = " Ehsan Marketing "


const length = str1.length  // length 
  // console.log(length);

const str2 = "Bogura";

    // console.log(str1.concat(str2));  concat()
    //  console.log(str1+str2);  //concat replace  + 

 const str3 = str1.replace("Marketing","MarketiNg")  // replace()
   //  console.log(str3);

const str4= str1.trim() // remove space from start and end 
    // console.log(str1);
    // console.log(str4);

const upper = "GOLAM HAKKANI"
const str5 = upper.toLowerCase()   // lowercase()
  // console.log(str5);

const str6 = str5.toUpperCase()  // touppercase 
  // console.log(str6);




const str8 = " Ehsan Marketing word is the best word marketing system is the world "

const str7 = str8.lastIndexOf("word")  // lastIndexOf()

// console.log(str7);



let greeting = "Hello World!";
let index = greeting.indexOf("World"); // indexof
// console.log(index); 

let str9 = "This is the golam hakkani mi mis the basic data book"
let str11 = str9.substr(4,3) // substr
// console.log(str11);

let str12 = str9.substring(4,15);  
// substring()  and accept the negative value 
// console.log(str12);

// console.log(str9.slice(7, 12));

console.log(str9.split(" "));

const splitData = str9.split(" ");

// console.log(splitData[0]);

