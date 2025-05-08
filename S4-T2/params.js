const express = require("express");
const app = express();

app.get("/:facname", (req, res) => {
  var f = req.params.facname;
  res.send(`welcome to website faculty ${f}`);
});
app.get("/:facname/sub/:s", (req, res) => {
  var f = req.params.facname;
  var s = req.params.s;

  res.send(`welcome to website faculty ${f} , you teach ${s}`);
});

app.get("*", (req, res) => {
  res
    .status(404)
    .send(
      "<h2 style ='color : red'; font-style : bold> this is page is not found</h2>"
    );
});

app.listen(5001, () => {
  console.log("listening on 5001");
});
