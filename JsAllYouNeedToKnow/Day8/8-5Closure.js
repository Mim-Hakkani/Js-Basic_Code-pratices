/*
  bairer kono jaiga the kono rokom kono argument pass charai jodi ek scope theke arek scope e data ase then take amra boli closure 

*/

function something(){
    let a = 5;

    return function(){
        // console.log(a);  // a value comes from parent without argument is called closure 

        // return na korle undefined ase 

        return a;
    }
}

console.log(something()());