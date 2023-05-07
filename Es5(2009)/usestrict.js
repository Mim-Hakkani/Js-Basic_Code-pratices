// "use strict" is just a string expression. It helps you to write cleaner code, like preventing you from using undeclared variables.

// charAt() : 

   // The charAt() method returns the character at a specified index (position) in a string:

    // Example
    // var str = "HELLO WORLD";
    // console.log(str.charAt(2))


    // Example 2 

    // var str = "HELLO WORLD";
    // console.log(str[0])

// Reserved Words as Property Names

    // var obj = {name: "John", var: "yes"} // // var is the reverse word
       
    // console.log(obj.var);

// String trim()
    // The trim() method removes whitespace from both sides of a string.

    // var trimStr = "       Hello World!        ";
    // console.log(trimStr.trim());

// isArray 

    // The isArray() method checks whether an object is an array.

    // const arrayCheck = {1:[{name:'mim'}]}
    // console.log(Array.isArray(arrayCheck));  // false 

// Array forEach()
      
    // not return value and  The forEach() method calls a function once for each array element
    // const numberItems =  [1,2,3,4,5]
      // using arrow function 
    // // numberItems.forEach((value,index,numberItems) => console.log(value + " :" + index + " ::"+ numberItems +"\n" ))
    // numberItems.forEach(myNumber)

    //   using Normal Function 
    // function myNumber (value){
    // console.log(value*2);
    // }



// Array map

        // var numbers1 = [45, 4, 9, 16, 25];
        // var numbers2 = numbers1.map(myFunction);

        // function myFunction(value) {
        // return value * 2;
        // }


// Array filter() ( return an array conditionally )

        // var numbers = [45, 4, 9, 16, 25];
        // var over18 = numbers.filter(item=>item>4);
        // console.log(over18);  // [ 45, 9, 16, 25 ]

// Array find() ( return an one item conditionally whitch is matched  )

        // var numbers = [45, 4, 9, 16, 25];
        // var over18 = numbers.find(item=>item>4);
        // console.log(over18);  // 45


// Array reduce() it returns  previousValue: number, currentValue: number, currentIndex: number, array: number[]

        // var numbers = [4, 4, 9, 1, 2];
        // var over18 = numbers.reduce((prev,next) =>prev+next);
        // console.log(over18);  // 20

// Array every()  Determines whether all the members of an array satisfy the specified test.  (And operation )

        // var numbers = [4, 4, 9, 1, 2];
        // var over18 = numbers.every((item) =>item>2);
        // console.log(over18);    // false 

// Array some()  Determines whether all the members of an array satisfy the specified test.  (or operation )

        // var numbers = [4, 4, 9, 1, 2];
        // var over18 = numbers.some((item) =>item>2);
        // console.log(over18);    // false 

// Array indexOf()  Search an array for an element value and returns its position.

        // var fruits = ["Banana", "Orange", "Apple", "Mango"];
        // var a = fruits.indexOf("Apple");  // 2
        // console.log("index : ",a );


// Array lastIndexOf() lastIndexOf() is the same as indexOf(), but searches from the end of the array.

        // var fruits = ["Banana", "Orange", "Apple", "Mango"];
        // var a = fruits.lastIndexOf("Banana");  // 0
        // console.log("index : ",a );

// JSON.parse()  json to obj 

    //   const jsonitems = '{"name":"John", "age":30, "city":"New York"}'
    //   const jsonObject = JSON.parse(jsonitems)
    //   console.log(jsonObject);  // { name: 'John', age: 30, city: 'New York' }

// JSON.stringify()

    // const objData = { name: 'John', age: 30, city: 'New York' }
    // const JsonData = JSON.stringify(objData);
    // console.log(JsonData); {"name":"John","age":30,"city":"New York"}