var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
	console.log("index.page 호출");
	res.render('index');
});

console.log("call");

module.exports = router;
