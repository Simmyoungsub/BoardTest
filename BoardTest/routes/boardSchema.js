var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
	"username" : String
});

module.exports = mongoose.model('boardSchema', boardSchema);