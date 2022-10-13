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
    
    6. 
   
   
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

console.log('Name is : ', typeof Bperson["id"]);

