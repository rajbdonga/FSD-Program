const express = require("express");
const app = express();

var st = {
  name: "Krunal",
  rollNo: 44,
  marks: 99,
};

app.length("/", (req, res) => {
  res.set("Content-Type", "application/json");
  res.write(JSON.stringify(st));
  res.end();
});

app.listen(5000, (err) => {
  console.log(err);
});
