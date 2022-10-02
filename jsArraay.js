// play with javaScript array 

//   1. declare with array 

const number= [1,5,15,25];
// console.log(number);  // a[1,5,15,25]



//   push the array  (add value in the last index )

    number.push(55);
    number.push('mim')
    // console.log(number);  // [ 1, 5, 15, 25, 55, 'mim' ]



//  pop (delete the last element of the array )

     number.pop();
    //  console.log(number);  // [ 1, 5, 15, 25, 55 ]



// fill (fill all elements in same to same )

 //  number.fill('mim');  [ 'mim', 'mim', 'mim', 'mim', 'mim' ]
 //  console.log(number);


 // join (join some extra element to array )

  let joinNumber = number.join(" "); // 1 5 15 25 55 
    //   console.log(typeof(joinNumber)); // return string type  