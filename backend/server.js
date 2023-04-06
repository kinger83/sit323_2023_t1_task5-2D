var express = require('express');
var app = express();
const http = require('http');


app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

app.get('/home', function(req, res){
    res.redirect('http://localhost:8080/');
});

app.listen(80, '0.0.0.0');

// THIS IS CALCS SERVER