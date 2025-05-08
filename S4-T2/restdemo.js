const express = require('express');
// const app = express();
const router = express.Router();

var students = [
    {'id':101,'name':'ABC','branch':'CE','Phoneno':9925071181,'city':'Ahmedabad'},
    {'id':102,'name':'AXC','branch':'CSE','Phoneno':9925071182,'city':'Surat'},
    {'id':103,'name':'AGC','branch':'CE','Phoneno':9925071183,'city':'Ahmedabad'},
    {'id':104,'name':'AYC','branch':'CSE','Phoneno':9925071184,'city':'Surat'},
    {'id':105,'name':'AUC','branch':'CE','Phoneno':9925071185,'city':'Ahmedabad'},
    {'id':106,'name':'AOC','branch':'CSE','Phoneno':9925071186,'city':'Surat'},
    {'id':107,'name':'AEC','branch':'CE','Phoneno':9925071187,'city':'Ahmedabad'},
    {'id':108,'name':'FKC','branch':'CSE','Phoneno':9925071188,'city':'Surat'},
    {'id':109,'name':'ALC','branch':'CE','Phoneno':9925071189,'city':'Ahmedabad'},
    {'id':110,'name':'YYY','branch':'CSE','Phoneno':9925071180,'city':'Surat'}
]


router.get('/',(req,res)=>{
    res.send(students);
});


// app.get('/:br/:ct',(req,res)=>{
//     var s1 = students.filter((s)=>
//         (s.branch == req.params.br)&(s.city == req.params.ct));
//     if(s1.length > 0){
//         res.send(s1);
//     }
//     else{
//         res.send("Student not found");
//     }
// });


router.get('/id/:i([0-9]{3})',(req,res)=>{
    var cd  = students.filter((s)=>
    (s.id == req.params.i));
    if(cd.length > 0){
        res.send(cd);
    }
    else{
        res.send("Student not found");
    }
});


// app.listen(3000,()=>console.log("your port is 3000"));

module.exports = router;