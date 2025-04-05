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
        console.log(req.url)
        res.write("<h2> Good Morning </h2>");
        res.write("\nHello World");
        res.end('\nLast Line');
        });
    myserver.listen(5000);
    console.log("Server started at port no 5000");

//    a) Read request 
//    b) Write response
//    c) Write heders
//    d) End response(compulsory)
// 3. Configure server to listen to particular port(0.65535) 

