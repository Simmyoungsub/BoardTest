var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Board = require('./boardSchema');

router.get('/', function(req, res, next) {
	 Board.find().exec(function(err,res){
		console.log(res); 
	 });
});

module.exports = router;