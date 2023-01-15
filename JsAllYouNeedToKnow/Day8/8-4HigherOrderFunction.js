function add(a,b){
    return a+b;
}

function manipulate(a,b,func){
  c = a+b;
  d = a-b;

  return function(){
    m = func(a,b)
    return c*d*m;
  }
}

const pp = manipulate(3,4,add)();
// console.log(pp()); 
console.log(pp); 