let arr=[1,5,6,9,8,7]
let isFound = false
let find = 5

for(let i=0;i<arr.length;i++){
    if(arr[i]==find){
        isFound=true;
        break;
    }
}

const searchData = isFound==true? "data found" : "data nor found"
console.log(searchData);