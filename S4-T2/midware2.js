// In the given form when subscribe in the given form subscribe chequebox 
// is chequed display thanq message and log out link that takes you home 
// page.if not checked display message click below to subscribe and a link
// subscrie which takes you to the path that display thanq message and 
// logout link. and all the paths display message welcome user name , your
//  emaild is ... use middleware for your program.

const express = require('express');
const app = express();

app.use(express.static(__dirname,{'index':'midware2.html'}));

function mid(req , res , next){
    res.set('Content-Type','text/html');
    data = req.query;
    res.write(`welcome ${data.name}, your email id is ${data.email}`);
    next();
}
app.use(mid);

app.get('/login',(req , res , next)=>{
    if(data.subscribe == 'yes'){
        res.write(`<h2>Thank You for Subscription</h2><a href="/">LOGOUT</a>`);
    }
    else{
        res.write(`<h2>Click Below to Subscribe</h2><a href="/subscribe">SUBSCRIBE</a>`);
    }
    next();
});

app.get('/login',(req , res)=>{
    res.send();
});

app.get('/subscribe',(req , res)=>{
    res.write(`<h2>Thank You for Subscription</h2><a href="/">LOGOUT</a>`);
    res.send();
});

app.listen(3000,()=>console.log('listening port is 3000'));