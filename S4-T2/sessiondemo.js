const express = require('express');
const app = express();
const cp = require('cookie-parser');
app.use(cp());
const sess = require('express-session');
app.use(sess({'saveUnitialized':false,
        'resave':false,
        'secret':'abc123',
        'cookie':{magAge:50000}
}));

// count number of website using session

app.get('/',(req,res)=>{
    if(req.session.views>=1){
        req.session.views++;
        res.send(`<h1> you visited ${req.session.views} no of times </h1>`);
    }
    else{
        req.session.views = 1;
        res.send(`<h1> you visited for 1st time </h1>`);
    }
});

app.get('/demo',(req,res)=>{
    req.session.views++;
    res.send(`<h1> you visited ${req.sessin.views} no of times </h1>`);
});

app.listen(5400,()=>console.log("port is 5400"));