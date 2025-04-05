// Was to handel i/o as below 
// 1. write a data in file appended data in file and 
// read the file to diplay data in console

const fs = require('fs');
const ee = require('events');
const e = new ee();

e.on('writefile',()=>{
    fs.writeFile('a.txt','Hello World!Some text ',(err)=>{
        if(err) 
            console.log("File is can not write");
        else 
            console.log('File written successfully');
            e.emit('appendfile');
    });
});
e.on('appendfile',()=>{
    fs.appendFile('a.txt','Additional text',(err)=>{
        if(err) 
            console.log("File is can not append");
        else 
            console.log('File appended successfully');
            e.emit('readfile');
    });
});
e.on('readfile',()=>{
    fs.readFile('a.txt','UTF-8',(err,data)=>{
        if(err) 
            console.log("File is can not read");
        else 
            console.log(data);
    });
});
e.emit('writefile');