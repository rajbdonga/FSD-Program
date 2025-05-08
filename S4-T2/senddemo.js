const express = require('express');
const app = express();
const path = require('path');

app.get("/",(req,res)=>{
    var p = path.join(__dirname,"index.html");
    res.sendFile(p);
});

app.get("/about",(req,res)=>{
    var p = path.join(__dirname,"about.html");
});

app.listen(5035,()=>console.log("listeing at 5035"));
