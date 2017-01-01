var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var board = require('./boardSchema');

router.get('/', function(req, res) {
	board.find({},function(err,rows){
		console.log(rows);
	});
});

module.exports = router;