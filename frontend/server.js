var express = require('express');
var app = express();
const http = require('http');
const path = require('path')


app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile('./index.html');
});
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/calc', function(req, res){
    http.get('http://calc/', function(response){
        response.pipe(res);
    });
});

app.listen(8080, '0.0.0.0');

// THIS IS HOMES SERVER