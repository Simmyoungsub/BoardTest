var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("index.page 호출");
	res.render('index');
});

module.exports = router;
