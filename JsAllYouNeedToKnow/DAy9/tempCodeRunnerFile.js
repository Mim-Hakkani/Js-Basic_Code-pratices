let arr =[1,2,3,4,55,6,7,8,9]

let max = arr.reduce(function(pre,curr){
   return Math.max(pre,curr)
},0)

let min = arr.reduce(function(pre,curr){
   return Math.min(pre,curr)
},0)


let sum = arr.reduce(function(pre,curr){
   return pre+curr
},0)


let mul = arr.reduce(function(pre,curr){
   return pre+curr
},1 )  // 1 is the initial value 


console.log(max);
console.log(min);
console.log(sum);
console.log(mul);