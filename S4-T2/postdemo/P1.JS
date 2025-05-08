// CREATE A FORM HAVING A TWO TEXT BOXES , ONE DROP DOWN WHICH HAVE SATE OF
// OPERATIONS AND CALCULATE BUTTON , THE NUMBERS ENTER IN TEXT BOX MUST BE 
// POSITIVE AND OPERAION MUST BE LEGEL ELSE ERROR IN DISPLAYED
// IN RED COLOR OTHERWISE RESULT IS DISPLAYED IN GREEN COLOR
// ON ROOT / RESULT (USE POST METHOD FOR SENDING DATA)

const express = require('express');
const app = express();

app.use(express.static(__dirname , {'index' : 'P1.html'}));

app.use(express.urlencoded({'extended':true}));

app.post('/submit-form',(req,res)=>{
    var data = req.body;
    
    n1 = parseInt(data.no1);
    n2 = parseInt(data.no2);

    if(n1>0 && n2>0){
        if(data.op == 'add'){
            res.send(`<h1 style='color:green'>Addition is: ${n1+n2}</h1>`)
        }
        else if(data.op == 'sub'){
            res.send(`<h1 style='color:green'>Substraction is: ${n1-n2}</h1>`)
        }
        else if(data.op == 'add'){
            res.send(`<h1 style='color:green'>Multiplication is: ${n1*n2}</h1>`)
        }
        else if(data.op == 'add'){
            res.send(`<h1 style='color:green'>Division is: ${n1/n2}</h1>`)
        }
        else{
            res.send(`<h1 style='color:red'>Illegal Operation</h1>`)
        }
    }
    else{
        console.log('Illegal Operation')
    }
});    

app.listen(3000,()=>console.log('listening at 3000'))