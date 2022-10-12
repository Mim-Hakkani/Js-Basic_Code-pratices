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
