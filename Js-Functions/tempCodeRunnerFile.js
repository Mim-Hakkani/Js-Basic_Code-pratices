function learning(){
    return ()=>{
        console.log("je function er kono nam nai ... and ekta funtion er return e jodi r ekta function thake taile ");
    }


    // only one return is used in one function 
    return function(){
        console.log("hiiiii");
    }
}

learning()()