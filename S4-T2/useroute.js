const express = require('express');
const app = express();
const route = require('./restdemo.js');
app.use(route);
app.listen(3000);