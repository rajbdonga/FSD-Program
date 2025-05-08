const express = require("express");
const app = express();
//static routing
// methods of express
// app.get()  -> give response based on request
// app.post()
//app.put()    -> upload file on server
//app.delete() -> delete file on server
//app.all()

//
// app.get()
//

// app.get([route] , callback)
// response method
// res.set('Content-Type' , 'text/plain')
// res.write("hello")
// res.end()

//res.send("html code")
//res.JSON(json object)
//res.sendFile("file path")
// res.render("file path")

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.write("<h2 style ='color : blue'> helllow world </h2>");
  res.send();

  //   res.send("<h2 style ='color : blue'> helllow world </h2>");
  //   res.write("hello");
});

app.get("/about", (req, res) => {
  //   res.set("Content-Type", "text/html");
  //   res.write("<h2 style ='color : blue'> helllow world </h2>");
  //   res.send();

  res.send("<h2 style ='color : pink'> this is about page</h2>");
});
app.get("/content", (req, res) => {
  //   res.set("Content-Type", "text/html");
  //   res.write("<h2 style ='color : blue'> helllow world </h2>");
  //   res.send();

  res.send(
    "<h2 style ='color : yellow'; font-style : bold> this is content page</h2>"
  );
});

app.listen(5000, () => {
  console.log("listeing on 5000");
});
