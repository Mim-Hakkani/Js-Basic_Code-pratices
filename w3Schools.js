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
 console.log(hoistName);

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
a = 10
console.log('this number is : ',a);  // undefind 
var a ;

/*

if is hoisted  process : 

var a = undefined
a= 10
console.log(a);

*/
