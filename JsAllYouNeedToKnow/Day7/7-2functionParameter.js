function add(a,b){
    let sum = a+b;
    console.log(sum);
}
add(5,10)  // agrument  and parameter 
add(50,10)


/***************************** Array ******************************/

let arr1 =[1,2,5,8];
let arr2 =[8,10,15,21];
let arr3 =[5,50,75,21];

function sumOfArray(arr){
    let sum = 0;
    for(let i = 0 ;i < arr.length;i++){
        sum+=arr[i];
    }

    console.log(sum);
}

console.log(arr1);
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)