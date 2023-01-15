
// when we are not use function name then this type of function is called annonimus function 

const value = function(a,b){
    sum = a+b;
    return sum
}

console.log(value(2,3));



// use it function as expression  meand used function as variables ...
 
 if(value(2,3)>5){
    console.log(true);
 }
 else{
    console.log(false);
 }


// es6 

    // const handlechick = ()=>{

    // }


    // asycrouns function 

    setTimeout(function(){
        console.log('ami kiso buji nai ');
        console.log(value(6,5))
    },5000)


    // setTimeout(() => { alert("Hello"); }, 2000);