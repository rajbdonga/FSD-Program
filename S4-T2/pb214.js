// store all setails of feedback form in a single form cookies.
// create a link show feedback that redirect show feedback data and a logout link.

const express = require('express');
const app = express();
const cp = require('cookie-parser');
app.use(cp());
app.use(express.urlencoded({'extended':false}));
app.use(express.static(__dirname,{index:'pb214.html'}));
app.post('/submit',(req,res)=>{
    var data = req.body;
    var fname = data.name;
    var email = data.email;
    var msg = data.message;
    var rating = data.rating;
    var feedback = {fname,email,msg,rating};
    res.cookie('feedbackc',feedback);
    res.send(`<h1> FeedBack Submitted Click Below </h1> <a href="/show"> SHOW FEEDABCK </a>`);
});
app.get('/show',(req,res)=>{
    var fb = req.cookies.feedbackc;
    res.send(`<h1> Name:${fb.fname}</h1>
        <h1> Message:${fb.msg}</h1>
        <h1> Email:${fb.email}</h1>
        <h1> Rating:${fb.rating}</h1> 
        <a href='/'>LOGOUT</a>`);
});
app.listen(4500,()=>console.log("port is 4500"));