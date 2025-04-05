// Cas using witch three massages are printed but in reverse order of witch thay are a corderd

// Method 1

function f1(){
    console.log('Hello');
} 
setTimeout(f1 , 3000);

// Method 2 

setTimeout(()=>console.log('Hello'),3000);
setTimeout(()=>console.log('Hello World'),2000);
console.log('Good Bye');

// Use ES6 callback function that displays addition of twos numbers witch are incremented 
// every two seconds

a = 10;
b = 10;
function add(a , b){
    console.log(a + b);
}
setInterval(() => {
    ++a;
    ++b;
    console.log(a + b);
    }, 2000);


