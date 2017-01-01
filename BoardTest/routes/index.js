var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
	console.log("index.page 호출");
	console.log(__dirname);
	console.log(path);
	res.sendFile(path.join("../views/index.html"));
});

console.log("call");

module.exports = router;
