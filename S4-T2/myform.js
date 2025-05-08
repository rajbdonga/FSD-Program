const express = require('express');;
const app = express();

app.set('view engine', 'pug');

app.use(express.urlencoded({'extended':true}));

app.get('/',(req,res)=>{
    res.render(__dirname+'/myform.pug');
});
app.post('/login',(req,res)=>{
    data = req.body;
    res.send(`<h2>Username:${data.username}</h2><h2>Email:${data.email}</h2><a href='/show'>Show From Pug File</a>`);
});
app.get('/show',(req,res)=>{
    res.render(__dirname+'/show.pug',{Username:data.username,Email:data.email});
});
app.listen(2000,()=>console.log('your port is 2000'));