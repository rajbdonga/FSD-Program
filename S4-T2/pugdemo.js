const express = require('express');
const app = express();
app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.render(__dirname+'/pugdemo.pug',{message:'Some Message',amount:5000});
})
app.listen(4000,()=>console.log('your port is 4000'))