/********************** Map ******************** */

// let arr = ['mim','jim','rabbanib','rafia']

// const brotherNames = arr.map(function(value,idex){
//     // console.log(value+'s'+' '+idex);
//     return (value+'s'+' '+idex)
// })

// console.log(brotherNames);
// console.log(arr);


/******************** For Each ***************** */

// let arr = ['mim','jim','rabbanib','rafia']

// const brotherNames = arr.forEach(function(value,idex){
//     // console.log(value+'s'+' '+idex);
//     return (value+'s'+' '+idex)
// })

// console.log(brotherNames);
// console.log(arr);



/************** Different Between Maps and forEach ******************* */

// map is a method that creates a new array with the results of calling a provided function on every element in the calling array. It does not modify the original array.

// let numbers = [1, 2, 3];
// let doubledNumbers = numbers.map(x => x * 2);
// console.log(doubledNumbers); // [2, 4, 6]


// forEach is a method that executes a provided function once for each array element. It does not create a new array and does not return anything.
// let numbers = [1, 2, 3];
// numbers.forEach(x => console.log(x * 2)); 
// Output: 2 4 6 


// So in short, map returns a new array after applying the provided function on each element, while forEach applies the provided function on each element but doesn't return anything.