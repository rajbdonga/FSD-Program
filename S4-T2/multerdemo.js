// const multer = require('multer');
// const express = require('express');
// const app = express();
// app.set('view engine','pug');
// app.use(express.urlencoded({extended:false}));
// app.get('/',(req,res)=>{
//     res.render(__dirname+'/multerdemo.pug');
// });
// var store = multer.diskStorage({
//     destination : 'uploads',
//     filename : (req,file,cb)=>{
//         cb(null,file.originalname);
//     }
// })
// var a = multer({storage:store});
// app.post('/uploads',a.single('myfile'),(req,res)=>{
// var f = req.file;
// if(f){
//     res.send(`your file ${f.originalname} is uploaded`);
// }
// else{
//     res.send('no file is uploaded');
// } 
// });
// app.listen(3000,()=>console.log('your port is 3000'));






const multer = require('multer');
const express = require('express');
const app = express();
app.set('view engine','pug');
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render(__dirname+'/multerdemo.pug');
});
var store = multer.diskStorage({
    destination : 'uploads',
    filename : (req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
})
var a = multer({storage:store,limits:{fileSize:5*1024}});
app.post('/uploads',a.array('myfile',3),(req,res)=>{
var f = req.files;
if(f.length > 0){
    res.set('Content-type','text/html');
    for(f1 of f){
        res.write(`<h2> file ${f1.originalname} uploaded </h2>`)
    }
}
else{
    res.send('no files are uploaded');
} 
});
app.listen(3000,()=>console.log('your port is 3000'));