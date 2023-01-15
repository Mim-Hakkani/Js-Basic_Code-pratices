function sumAll(){

    // console.log(arguments);
    // console.log(arguments[1]);
    // console.log(arguments['5']);
    
    let sum = 0;
    for(let i = 0; i<arguments.length;i++){
        sum+=arguments[i]
    }

    console.log('Sumamtion :: ', sum);
}

sumAll(1,2,3,4,5,6)