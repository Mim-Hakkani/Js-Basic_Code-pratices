function AllInOne(a, b, func) {
  let c = a + b
  let d = a - b
  let result = func(c, d)
  return result
}


// callBack function is done 

const MainResultSum = AllInOne(3,4,function(c,d){
    return c+d
})


// callback function 2 example is done 
const MainResultSuB = AllInOne(3,4,function(c,d){
    return c-d
})

console.log(MainResultSum);
console.log(MainResultSuB);