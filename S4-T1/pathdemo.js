// in the given path check whether the file is and image or not, 
// if it is an image print the file name and root directory

const path = require("path");
var s1 = "D:/abc/demo/test/myfile.jpg"
var p = path.parse(s1);
console.log(p);
if(p.ext == '.jpg' || p.ext == '.png' || 
   p.ext == '.gif' || p.ext == '.jfif'){
    console.log("Given file " + p.name + " is an image in root directory " + p.root);
}
else{
    console.log("Not an image")
}   