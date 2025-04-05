//                          Synchronized

// const fs = require("fs");

// 1. Create Folder

// fs.mkdirSync("test"); 
// fs.mkdirSync("./abc/test1" , {recursive : true})

// 2. Write File(Create)

// fs.writeFileSync("./test/a1.txt","Some Text Write in File");
// console.log("file Written");

// 3. Append File(Create)

// fs.appendFileSync("./test/a1.txt"," Hello World")
// console.log("File Appended");

// 4. Read File

// Method Using Buffer

// var data = fs.readFileSync("./test/a1.txt");
// console.log(data.toString());

// Method Without Using Buffer

// var fdata = fs.readFileSync("./test/a1.txt","UTF-8");
// console.log(fdata);

// 5. Delete File

// fs.unlinkSync("./test/a1.txt");

// 6. Reaname File

// fs.renameSync("./test/a1.txt","./test/a2.txt");

// 7. Delete Folder

// fs.rmdirSync("./test");