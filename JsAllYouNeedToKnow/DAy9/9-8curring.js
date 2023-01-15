function Curring(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
let result = Curring(5)(10)(15)
console.log(result);

/*

 not use multiple parameter use one by one parameter 
*/