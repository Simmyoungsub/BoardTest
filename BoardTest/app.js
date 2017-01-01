var express = require('express');
var app = express(); 
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var server = http.createServer(app);
var index = require('./routes/index');
var port = 3033;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

server.listen(port, function () {     
	console.log("Server listening on port %d", port); 
	
});
