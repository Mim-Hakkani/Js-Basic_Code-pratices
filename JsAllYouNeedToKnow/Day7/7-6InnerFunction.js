function something(greet,name){
    // console.log(greet,name);


    function getFirstName(){
        if(name){
           
            return (name.split(" ")[0])
        }
        else{
            return ' '
        }
    }

 
    // console.log(   getFirstName());

    const message = greet + ' '+    getFirstName();
    console.log(message);
}

something('Good Afternoon','Kuddus Hakkani mim')
// console.log();