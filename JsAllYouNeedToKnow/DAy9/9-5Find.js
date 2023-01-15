let arr = [1,2,3,4,8,6,7,5,6,98]

// only return a one element 
let result = arr.find(function(val){
    return val===6
})
console.log(result);

// only return a one elemet index 
let results = arr.findIndex(function(val){
    return val===6
})
console.log(results);