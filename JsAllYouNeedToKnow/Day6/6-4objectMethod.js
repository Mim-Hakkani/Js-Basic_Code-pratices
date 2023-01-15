const obj1={
    name:'mim',
    roll:150132,
    dept:'cse'
}

// see all keys of the object 

// console.log(Object.keys(obj1));

const arr = Object.keys(obj1);

//  show the value of the object 

    const arr2 = Object.values(obj1);
    // console.log(obj1.arr[0]);

    // console.log(arr2);

//  show the object entities 

    //    const ar3 = Object.entries(obj1)
    //    console.log(ar3);


// create the object duplicate value 

const obj2 = Object.assign(obj1);
console.log(obj1);
obj2.dept = 'eee'
console.log(obj2);