var mongoose = require('mongoose');

var boardSchema = mongoose.Schema({
	username : String
});

module.exports = mongoose.model('boardSchema', boardSchema);