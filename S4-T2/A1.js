const express = require('express');
const app = express();

var student = {"name":"raj","r.no":170,"marks":12};

app.get("/j1",(req,res)=>{
    res.send(student);
});

app.listen(5030,()=>console.log("listeing port at 5030"));