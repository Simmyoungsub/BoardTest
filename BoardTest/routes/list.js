var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Board = require('./boardSchema');

router.get('/', function(req, res) {
	 Board.find({}).exec(function(err,rows){
		console.log(rows); 
	 });
});

module.exports = router;