var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var boardSchema = require('./boardSchema');

router.get('/', function(req, res) {
	boardSchema.find({}).exec(function(err,rows){
		console.log(rows); 
	 });
});

module.exports = router;