const obj1 = {
    a:10,
    b:20
}
const obj2 = {
    a:10,
    b:20
}

// not possible if compare two object directly  
console.log((obj1 == obj2));

// if check the value of the object then compare it 

console.log( obj1.a === obj2.a && obj2.b===obj1.b)


// last simple methd is to convert it in string 

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));