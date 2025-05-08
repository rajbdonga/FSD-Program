const express = require('express');
const app = express();

app.use(express.static(__dirname , {'index' : 'myform.html'}));

app.get('/submit-form',(req,res)=>{
    var data = req.query;
    // res.send(data);
    // res.send(`<table border=5>
    //             <tr>
    //                 <td>Details</td>
    //                 <td>Values</td>
    //             </tr>
    //             <tr>
    //                 <td>First Name</td>
    //                 <td>${data.fname}</td>
    //             </tr>
    //             <tr>
    //                 <td>Last Name</td>
    //                 <td>${data.lname}</td>
    //             </tr>
    //             <tr>
    //                 <td>City</td>
    //                 <td>${data.city}</td>
    //             </tr>
    //             <tr>
    //                 <td>Address</td>
    //                 <td>${data.address}</td>
    //             </tr>
    //             <tr>
    //                 <td>Gender</td>
    //                 <td>${data.gender}</td>
    //             </tr>
    //             <tr>
    //                 <td>Hobbies</td>
    //                 <td>${data.hobbies}</td>
    //             </tr>    
    //         </tabel>`)
    res.set('content-type','text/html');
    var address = req.query.address;
    var addr = address.split(',');
    for(a of addr){
        res.write(`<h2>${a}</h2>`);
    }
    res.send();
});

app.listen(4095,()=>console.log('listening at 4095'))