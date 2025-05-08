const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(__dirname , {'index':'home.html'}));

app.use(express.static('frontend'));

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+'/about.html');
})

app.listen(5635,()=>console.log("listening to 5635"));