/*************
     Power Of JavaScript Code 

  ************** */



// inner html 

document.getElementById('seeelements').innerHTML=`<div>
<h1 style="color:red">This is the Header </h1>
<p>Golam Hakkani Mim</p>
<button>Hakkani </button>
</div> `;


// inner text 

document.getElementById("changeText").innerText=`Ehsan Software in the Firm`


// change attributes 

 document.getElementById("changewidth").src="m2.png"

 // change style 

 document.getElementById("changeStyles").style.fontSize="52px"
 document.getElementById("changeStyles").style.color="violet"



 /********************************** 
  
         js output functionality  
 
 ***********************************/

    // console.log  used for debugging 

 function showConsole(){
    console.log('Ki re ba ... click korsis keno ?')
 }


  // inner html / inner text 

  function Showinner(){

    document.getElementById('inner').innerText="Change code ";
  }


  // document.write 

   function showWrite(){
    alert('Vebe Click korun ?? ');

     document.write('Ja ,,, Baba sob Gelo koi ? ')
   }


   // print Handler 

   function printHandler(){
        window.print();
   }



    /******************* showStatemetExample ********************* */

    function showStatemetExample(){
        alert(
           ` 
             let a,b,sum;
             a = 5; 
             b = 12;
             sum = a+b;
             
            `

        )
    }


    /* var hoisting concept  */


 hoistName = "Golam Hakkani Mim";
 var hoistName;
//  console.log(hoistName);

   // value assign first then declare is possible in var variable but using let is not possible before declaration 




   /*  function details 
   
    1. function declaration 
    2. augument and parameter 
    3. return 
    4. reuse code using the function call
    5. after return break the function activity bellow the code is not execute 
    
    6. if not return the code default it return undefined value 

    8 using variable inside the function works as blobk scope and global scope 

     

    Example : 

   //  function declaration 
   
     function PersonalInfo(name,roll){
       designation = "Engineer"

        salary = 30000;

        return salary;

        console.log("code is not working ");
     }

     PersonalInfo("mim",111250); // function call
   
   
   */



   /**********
     javascript Object With play 

    * ******* */

  // declare 

  const Bperson ={
   name : 'hakkani',
   id   : 150132
}

// show 

//  console.log('Name is : ', Bperson.name);
//  console.log('Name is : ', Bperson);


// play 

Bperson.name ="Hasan vai ";

// console.log('Name is : ', typeof Bperson["id"]);



/*********
 
 Java Script Data Types  : 

 premitive = direct store value in variable 

   premitive = number , string , boolean , undefind , null 

  Ex: 
    
  let  a = 10 // Number 
  let  a = 'hakkani // String 
  let  a = true // Boolean 
  let  a    // declare but not assigned  is called undefined 
  let a =null   // not undedined but null 
  
  
Nonpremitive : Store reference 

   NonPremitive = ( array ,object , function )

   Ex : 

    let a[4,5,15,20]  // array 

    const person = {name : "hakkani"}  // object 

     const Hakkanimim =()=> a+b;  // function
  

   [ Check different type using typeof ]

 
 **********/



   /***************
      Variable : 


       const a = 5;  // not rechange  -> blockScope
       let a = 10 ;  // rechange  => blockScope
       var m = 15    //  rechage => globalScope 


    Variable Concatenation : 

      const a = 'mim'+ 'hakkani'  = > mimhakkani => string+string = string

      [Note : String + All ] = String 
      [Note : Number + Number ] =Number 
      [Note: 10+10+'mim'] = 20mim type string

    ******************/


      /*******************
       
            JS  Scope 

         ***********************/

  /*
    1. Global Scope (var )
    2. Function Scope (let,const,var)
    3. Block Scope (let ,const)

  */

  // Global : 
    var SkyColor = 'Blue';
    let  placeName = "America";
   
    function SkyColors(){
    //  console.log('Global Scope in the SkyColor : ',placeName, SkyColor );
    }

     SkyColors();
    //  Function Scope :

    function GymCenters(){
      var locations = "Bogura";
      // console.log("Gym Center Location : ", locations);
    }

    // location ="Dhaka";  reference error 

    // console.log('New Location is : ',locations); reference error / undefined 

    GymCenters();


    // Block Scope 


    if(true){
      let BlockA = 5;
      const BlockB = 10;
      // console.log('Two Variables is : ', BlockB,BlockA);
    }

    // console.log('May not be defined  : ',BlockB);



    /************** 
        try catch finally

    *******************/

    let fnumber = "hkkani bapureee "

    try{
      if(fnumber=="") throw "Empty Number ";
      if(isNaN(fnumber)) throw {
        name:'Hakkani error ',
        message:"This is Not Number "
      }
      if(fnumber<0) throw "Not A Negative Number ";
      if(fnumber>15) throw "Too Large ";
      fnumber =Number(fnumber);     
    }

    catch(err){
      // console.log(err.name + err.message);
       
    }

    // console.log("Real Number is : ",fnumber);






   /*********************** 
    
        Lexical Scope in javaScript 

      **********************/




        function parentfunction(){
           var a = 10;

           function childFunction(){
            var b = 40;
            const sum = a+b;
            // console.log('Summation from child : ', sum);
           }

           childFunction();

          //  console.log('Summation from parent is : ', a+b); referance error 
        }

         
        // call the parent function 

        parentfunction();


  /*
  
  the lexical error is the error that use parent data in child function  but child to parent is not accessable 

  parent -> child 
  child x parent 
   
  */




    /**************** Js Hoisting ************ */

    // hoisting step 1 : 

      // 1. firstly creation phase all function declare first 
      // 2. js declare all item is read first 
      
  
// hoisting for function 

Summation();

function Summation(){
  let a = 4;
  let b = 40;

  let summation = a+b;
  //  console.log("Summation : ",summation);
}


// hoisting for variable (using var) 
a = 10;
// console.log('this number is : ',a);  // undefind 
var a ;


/**********************

  if is hoisted  process : 

    var a = undefined
    a= 10
    console.log(a);

***********************/

// hoistA=100;
// console.log('value is : ',hoistA);
// let hoistA

/*
using let ,,

  let hoistA  declare but not undefined 

  hoistA = 100

  console.log(hoistA);


*/

aconstHoist = 021;
// const aconstHoist ;
// console.log(aconstHoist); see the syntax error because  in const 
// initialize and declate at a time otherwise it called syatax error


/**************
     String in JavaScript  

  ******************* */


    //  declare 

    text ="Hakkani";
    // console.log('your name is :: ',text);

    // lengthCheck 

    // console.log(text.length);




    /*********************
    
       Closure in JavaScript 
     
    ****************************/


      //  closure example 1 : 
         
         //  parentfunction 
       function closureJS(){
        let a = 4;

          // child function 
        return function(){
           let b = 10;
          //  console.log('Sumamtion is :',a+b);
        }
       }

       closureJS()();

       /*********************
          আমরা যদি প্যারেন্ট ফাংশনটা রিটার্ন করে ফেলি তারপরেও আমরা চাইল্ড ফাংশন থেকে প্যারেন্ট ফাংশনের ভ্যারিয়েবল, ফাংশন অথবা অবজেক্ট অ্যাক্সেস করতে পারবো। কারণ এগুলো রিটার্ন হওয়ার পরও মেমোরী তে থেকে যায়। আর এটাই হচ্ছে ক্লোজারস।
       ***********************/


          // closure example 2  with parameter 


          function closureParent(fatherName){

            return function ChildName(myName){
              // console.log('Full Name Of Ours : ',fatherName + ' Son Of '+myName);
            }
          }

          // call the function 

          closureParent('A.Karim')('Golam Hakkani Mim');



          /**********************
            
          Immediately Invoked Function Expressions (IIFE) 

          আমাদের সাধারনত কোনো ফাংশন বানানোর পর পরে সেটাকে কল করে ইউজ করতে হয়। কিন্তু যদি আমরা ফাংশন বানানোর সাথে সাথেই সেটাকে কল করতে চাই সেক্ষেত্রে আমরা ইফি Immediately Invoked Function Expressions (IIFE) টেকনিক ইউজ করতে পারি।
            
           ************************/

          // declaration 


          (function(){
            // console.log('IIFE ,,, Hellow world ');
          })();

          // declare with argument passing 

          (function mynae(name){
            // console.log('IIFE ,,, Hellow world '+ name);
          }
          )('Hakkani');

          // declare with object ,return and store variables 
          
          var EmployeInfo = (function(){
            var personalInfo = {
              name :'Ehsan Marketing ',
              location:'Bogura'
            };
            return personalInfo;
          })();
          
          // console.log('Employee information : ', EmployeInfo.name);

   /****************************************************** */ 
   
  //  closure pratices : 

      // function closurepratices(){
      //   const a = 55;

      //   return function childSide(){
      //       const b = 5;
      //       console.log('Summation pratices closure:',a+b);
      //   }
      // }

      // closurepratices()()


  // IIFE pratices : 

    //  (function autocall(ownerName){
    //    console.log('hi ami auto calling function dont mind aa '.concat(ownerName));
    //  })('createbyMim') ;

  
  /***************** This KeyWord in Js  *********************/


  //  step 1 : ১। গ্লোবাল রুলস 


  function thisCheck(){
    //  console.log(this);  // window dekhabe console e 

    //  this.name = "Ehsan Marketing Staff Dashboard "  // works as globally 
  }

  thisCheck()

  // console.log(name);


  // step 2 : অবজেক্ট রুলস 


  const thisObject ={
    name : "hakkani ",
    id :'d125df86',
    frontEnd: function(){
      // console.log('Name is :: ',this.name); 
      // এখানে this কীওয়ার্ড সবসময় কাছের কাস্টমভাবে ডিফাইনকৃত অবজেক্টটাকে ইন্ডিকেট করবে।
    }
  }

  thisObject?.frontEnd();


  const thisObject2 = {
    name:'anower hossain',
    id:'11225587',
      another:{
        name:'Rafia Khatun',
        works:function(){
          // console.log('Comes From Another :: ',this.name);
        },
        // isTrue:function(){
        //    console.log(another===this);  undefined 
        // }, 
   
      },

       isTrue:function(){
          //  console.log(thisObject2===this);  
        }, 

  }
  thisObject2?.isTrue()
  thisObject2?.another?.works();

  // play with this call method 

  var myCustomObj = {
   name: 'Zonayed Ahmed',
   age: 21,
   job: 'Student',
   anotherObj: {
      name: 'Ahmed Zonayed',
      value: function() {
        //  console.log(this);  // it indicated the current object property like anotherobj
      }
   }
}
 
myCustomObj.anotherObj.value()

// if i want to access the first object property then use call method 

myCustomObj.anotherObj.value.call(myCustomObj)


/*******************
 
        Call()  method 

    ********************/


        const callMethod1 ={
           
          name :'Hakkani mim ',
          callMethod2 : {
             id:'015768761',
             name:'muhammad sm',
             anotherCall : function (){
                      console.log('Value is : '+this.name);
                    }
          }

         
        }
   
         // call in first object using call 

        callMethod1.callMethod2.anotherCall.call(callMethod1);


 // object 1 

      const karim = {
        name :'Abdul Karim Dad',
        dob:1965,
        age:function(currentYear){
          console.log('Your are '+`${this.name} ${currentYear-this.dob}` +' years old');
        }
      }


      // object 2 

      var rahim = {
                    name: 'Rahim nana',
                    dob: 1986
                  }



      // karim.age.call(rahim,2022,name);

      // karim.age.call(rahim,2026);

      // karim.age.apply(rahim,[2025]);



      /*****************
        object oriented javascript  
       ****************/


        // primitiveData   = নাম্বার(Number), স্ট্রিং(String), বুলিয়ান(Boolean), আন্ডিফাইন্ড(undefined), নাল(null) এগুলো হচ্ছে প্রিমিটিভ ডাটা টাইপ।

        // NonPrimitive data = অ্যারে, ফাংশন, অবজেক্ট, ডেট, নাম্বার/স্ট্রিং/বুলিয়ান এর র‍্যাপার(Wrapper) ফাংশন সবই অবজেক্ট।


        // difference এখন প্রিমিটিভ ডাটা টাইপ আর অবজেক্ট এর মধ্যে প্রধান ডিফারেন্স হচ্ছে এদের ভ্যালু স্টোর করার সিস্টেমে। যেখানে প্রিমিটিভ ডাটা টাইপে ভ্যালু নিজের কাছেই স্টোর করে, অন্যদিকে অবজেক্ট সাধারণত সরাসরি ডাটা স্টোর করে না, বরং ঐ ডাটাটা অন্যকোথাও থাকে, অবজেক্ট এ জাস্ট ঐটার রেফারেন্স থাকে।


      //  sa = 10 ;
      //  sb = 20 ;

      //  console.log('before swap a and b is : ',sa,sb);

      //  function swap(a,b){
      //   console.log('Before Swap inside the function : ',a,b);
      //   temp = a;
      //   a= b;
      //   b=temp;

      //   console.log('After Swap then :: ',a,b);
      //  }
       
      // swap(sa,sb);
      // console.log('After swap outside the function : ',sa,sb);
let width = screen.width;
// console.log(width);

$(document).height();
let pp = $(document).width();

// console.log('hakkani width :: ', pp);

// golam hakkani mim 