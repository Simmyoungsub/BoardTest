var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var board = require('./boardSchema');


var row = new board({
	name : "content1"
});

row.save(function(err,row){
	if(err){
		console.log(err);
	}
});

router.get('/', function(req, res) {
	board.find({},function(err,rows){
		console.log(rows);
	});
});

module.exports = router;