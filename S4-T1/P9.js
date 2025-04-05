// Was to handel events as below 
// 1. cheque if radius of circle is nagative or not , 
// if nagative print error massage else 
// calculate parimeter circle 2*pi*r
// 2. if side of square is nagative display 
// error else calculate parimeter of square 4*side 

const ee = require("events");
const e = new ee();

e.on('nagative_radius' , (r) => {
    if(r<0)
        console.log("radius is nagative : "+r);
    else
        console.log("radius of circle is : "+(2*3.14*r));
})
e.on('nagative_size' , (s) => {
    if(s<0)
        console.log("side is nagative : "+s);
    else
        console.log("side of square is : "+(4*s));
})

e.emit('nagative_radius',10);
e.emit('nagative_radius',-10);
e.emit('nagative_size',20);
e.emit('nagative_size',-20);