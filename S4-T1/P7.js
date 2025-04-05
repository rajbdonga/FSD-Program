// was to show a simple html file as home page using http server.

const http = require('http');
const fs = require('fs');

var myserver = http.createServer((req, res) => {
        if(req.url == "/"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            var data = fs.readFileSync("home.html","UTF-8");
            res.write(data);
            res.end('\nLast Line');
        }
        else{
            res.writeHead(404 , {'Content-Type': 'text/html'});
            res.write("<h1 style = 'color : red'> 404 Not Found </h1>");
            res.end();
        }
        }).listen(5021,()=>console.log("Listening ast 5021"));
