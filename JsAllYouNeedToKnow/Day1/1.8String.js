// string leteral 

 // string declaration direct 

let name = "Hakkani";
let fullName ='Golam Hakkani'
let designation = `Engineer`

// console.log(typeof(name),typeof(fullName),typeof(designation));


// string Conversion 

let value = String(12654); // number to string using String() 
// console.log(typeof(value)); 

let markes = 45.658;
let remarks = markes.toString(); // toString() method 
// console.log(typeof(remarks));

// calculate string length 

// console.log(remarks.length);  //  calculate string length 

// concate() method  or + operator used 

const stringAddition = name.concat(' ').concat(remarks);

//  console.log(stringAddition);

const replaceMarks = remarks.replace("45.658","46.658");
console.log(replaceMarks);

// Note : It's important to note that the .replace() method does not modify the original string, it returns a new string with the replacements made.
