var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/board');

var db = mongoose.connection;

db.on('error',function(err){
	if(err){
		console.log(err);
	}
});

db.once('open',function(){
	console.log("mongo db connect OK!!");
});