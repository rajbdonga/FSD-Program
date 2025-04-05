const ee = require("events");
const e = new ee();
// e.on("print", (m) => console.log("Hello World " + m));
// e.emit("print" , "From DPB");
// e.on("add", (a,b) => console.log("Addition " + (a+b)));
// e.emit("add" , 30 , 40);
// e.on("print", (m) => {console.log("Hello World " + m); e.emit("add" , 10 , 40)});
// e.emit("print" , "some msg");

function a(a,b){
    console.log("Addition " + (a+b));
}
function s(a,b){
    console.log("Subtraction " + (a-b));
}
e.on('add' , a);
e.on('sub' , s);
e.on('add' , a);
e.on('sub' , s);
e.emit('add' , 50 , 40);
e.emit('sub' , 50 , 40);
console.log(e.listenerCount('add'));
e.removeListener('add',a);
console.log("After Remove");
e.emit('add',50,30);
console.log("Remaining : "+e.listenerCount('add'));
e.removeAllListeners('add');
console.log("After all remove");
e.emit('add',50,30);
console.log("Remaining : "+e.listenerCount('add'));