const P8 = require("./P8.js");

for(let i = 2; i <= 50; i++){
    if(P8.isprime(i)){
        console.log(i + " is a prime number");
    }
    else{
        console.log(i + " is not a prime number");
    }
}

console.log(__filename);
console.log(__dirname);