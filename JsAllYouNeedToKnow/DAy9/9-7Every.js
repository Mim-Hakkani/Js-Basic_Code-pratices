let arr = [1,2,5,4,7,-5,-8,15,98,0,155]

const data =  arr.every(function(value){
  return value%2==0
})

console.log(data);  // its like as and operation 


const someData = arr.some(function(v){   // it wokrs as or operation 
    return v%2==1
})

console.log(someData);