var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("index.page 호출");
	res.send("Test");
});

console.log("call");

module.exports = router;
