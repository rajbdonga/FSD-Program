const express = require('express');
const app = express();
const cp = require('cookie-parser');

app.use(cp());
app.get('/',(req,res)=>{
    res.cookie('fname','raj',{'maxAge':5000});
    res.cookie('lname','donga');
    res.cookie('email','raj@gmail.com');
    res.cookie('age','19');
    res.clearCookie('lname');
    res.write(req.cookies.lname+" ");
    res.write(req.cookies.fname+" ");
    res.write(req.cookies.email+" ");
    res.write(req.cookies.age+" ");
    res.end();
})
app.listen(4000,()=>console.log("port is 4000"));