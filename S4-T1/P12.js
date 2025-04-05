// Create a jason object as given below , was to 2 the following 
// 1. Write the above object in a file named j.txt , read file in console
// and print only emp id
// 2. Display this json object in browser when '/' path is called else give
// 404 error

const fs = require('fs');
const http = require('http');

student = {
    'name' : 'dhruvi',
    'empid' : '241',
    'isfaculty' : true
}

var str = JSON.stringify(student);
fs.writeFileSync('j.txt', str);
var data = fs.readFileSync('j.txt', 'utf8');
console.log(data);
var ob = JSON.parse(data);
console.log("Employee id : "+ob.empid);
http.createServer((req , res) => {
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.write(str);
        res.end("last line");
        }
    else{
        res.writeHead(404,{'Content-Type' : 'text/plain'});
        res.end("404 error");
    }
})
.listen(5000, () => {
    console.log('server is running at port 3000');
});