// PB-94 
// 1. Welcome to home page with 2 links
// 2. About us page display welcome to lju in bold and blue color
// 3. Contact us page display email in italic and red color
// 4. Any author request will give page not found massage

const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==="/"){
        res.write("<h1> Welcome to Home Page </h1>");
        res.write("<a href='/about'>About Us </a> </br>");
        res.write("<a href='/contact'>Contact Us </a>");
        res.end();
        }
    else if(req.url==="/about"){
        res.write("<h1> Welcome to Lju </h1>");
        res.write("<p style='color:blue'>Welcome to Lju </p>");
        res.end();
        }
    else if(req.url==="/contact"){
        res.write("<h1> Contact Us </h1>");
        res.write("<p style='color:red'>Email: <i>lju@gmail.com</i> </p>");
        res.end();
        }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1> Page Not Found </h1>");
        res.end();
        }
    }).listen(4000,()=>{
        console.log("Server is running at port 3000");
        });