let arr = [1,2,5,4,7,-5,-8,15,98,0,155]

// sort the array in assending order 

arr.sort(function(a,b){
    if(a>b){
        return 1;
    }
    else if(a<b){
        return -1;
    }
    else{
        return 0
    }
})

// console.log('used for assending order :',arr);

// sort the same aray in decending order 

arr.sort(function(a,b){
    if(a>b){
        return -1;
    }
    else if(a<b){
        return 1;
    }
    else{
        return 0
    }
})


// console.log('used for decending order ::',arr);



const person =[
    {
        name:'mim',
        age:29
    },

     {
        name:'jim',
        age:27
    },

     {
        name:'alif',
        age:9
    },

     {
        name:'lam',
        age:19
    },
     {
        name:'amin',
        age:25
    },
]

// sort by name 

person.sort(function(a,b){
    if(a.name>b.name) return 1;
    else if(a.name<b.name) return -1;
    else return 0

})

console.log(person);

person.map(function(value){
    console.log(value.name);
});