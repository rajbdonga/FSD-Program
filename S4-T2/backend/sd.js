const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static('frontend'));

// var p = path.join(__dirname,"../frontend");

// app.use(express.static(p));

var htmlp = path.join(__dirname,"../html");

var cssp = path.join(__dirname,"../css");

var imagep = path.join(__dirname,"../image");

app.use(express.static(htmlp));

app.use(express.static(cssp));

app.use(express.static(imagep));

app.listen(5045,()=>console.log("listening to 5045"));