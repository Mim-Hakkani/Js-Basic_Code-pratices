let arr =[1,2,3,4,55,6,7,8,9]

let max = arr.reduce(function(pre,curr){
   return Math.max(pre,curr)
},0)

let min = arr.reduce(function(pre,curr){
   return Math.min(pre,curr)
})


let sum = arr.reduce(function(pre,curr){
   return pre+curr
},0)


let mul = arr.reduce(function(pre,curr){
   return pre*curr
},1 )  // 1 is the initial value 


// console.log(max);
// console.log(min);
// console.log(sum);
// console.log(mul);


/*

reduce is a method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It can be used in a variety of ways depending on the desired outcome.

Summing up an array of numbers
Counting the occurrences of a specific element in an array
Flattening an array of arrays
Grouping items in an array by a certain property
Creating an object with properties and values derived from an array
Here are a few examples:

Summing up an array of numbers:
Copy code
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum); // 10
Counting the occurrences of a specific element in an array:
Copy code
let items = ['apple', 'banana', 'apple', 'orange'];
let count = items.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 1, orange: 1 }
Flattening an array of arrays:
Copy code
let nestedArr = [[1, 2], [3, 4], [5, 6]];
let flatArr = nestedArr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatArr); // [1, 2, 3, 4, 5, 6]
Grouping items in an array by a certain property:
Copy code
let people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 35 },
];
let groupByAge = people.reduce((acc, cur) => {
  (acc[cur.age] = acc[cur.age] || []).push(cur);
  return acc;
}, {});
console.log(groupByAge); 
/* 
{
  25: [{ name: 'Bob', age: 25 }],
  30: [{ name: 'Alice', age: 30 }],
  35: [{ name: 'Charlie', age: 35 }, { name: 'David', age: 35 }]
}

Creating an object with properties and values derived from an array:
Copy code
let keyValueArr = [['a', 1], ['b', 2], ['c', 3]];
let obj = keyValueArr.reduce((acc, cur) => {
  acc[cur[0]] = cur[1];
  return acc;
}, {});
console.log(obj); // { a: 1, b: 2, c: 3 }
As you can see, reduce function can be used in many different ways, it's a powerful method to reduce a collection to a single value, and it depends on the use case how you use it.


*/