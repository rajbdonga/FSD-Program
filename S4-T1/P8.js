// Was to create a module having a function to cheque whether numbers from 2 to 50 
// are print prime or not print in console

exports.isprime = (num) => {
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

