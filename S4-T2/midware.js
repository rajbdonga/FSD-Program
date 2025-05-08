const express = require('express');
const app = express();

function mid(req , res , next){
    console.log('Global Middleware Called');
    res.set('Content-Type','text/html');
    res.write('<h2>Global Middleware Called</h2>');
    next();
}
app.use(mid);

function midl(req , res , next){
    console.log('Local Middleware Called');
    res.write('<h2>Local Middleware Called</h2>');
    next();
}

app.get('/',(req,res)=>{
    res.write('<h2>Home Page</h2>');
    res.end();
});

app.get('/about',midl,(req,res)=>{
    res.write('<h2>About Page</h2>');
    res.send();
});

app.get('/product',(req,res,next)=>{
    res.write('<h4>First Line</h4>');
    next();
});

app.get('/product',(req,res,next)=>{
    res.write('<h4>Second Line</h4>');
    next();
})

app.get('/product',(req,res,next)=>{
    res.write('<h4>Final Line</h4>');
    res.end();
})

app.listen(5100,()=>console.log('Listening port at 5100'));