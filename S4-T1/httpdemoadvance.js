// Status Codes
// 1xx - No Response 
// 2xx - Ok
// 3xx - Redirection
// 4xx - Client Side Error
// 5xx - Server Side Error

// 1. Require http module

    const http = require('http');

// 2. Create server 

    var myserver = http.createServer((req, res) => {
        if(req.url == "/"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h2> Good Morning </h2>");
            res.write("\nHello World");
            res.end('\nLast Line');
        }
        else{
            res.writeHead(404 , {'Content-Type': 'text/html'});
            res.write("<h1 style = 'color : red'> 404 Not Found </h1>");
            res.end();
        }
        }).listen(5021,()=>console.log("Listening ast 5021"));

//    a) Read request 
//    b) Write response
//    c) Write heders
//    d) End response(compulsory)
// 3. Configure server to listen to particular port(0.65535) 

