const url = require('url');
var s = "http://localhost:5020/abc/def/home.html?name=Raj&date=27-3-2025#sec1";
var parsed = url.parse(s);
console.log(parsed);