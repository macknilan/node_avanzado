var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//conexion a mongoose
mongoose.connect('mongodb://localhost/sfotipy');

var artistSchema = new Schema({
	name: String,
	slug: String,
	albums:[{
		title: String,
		year: Number,
		image: String
	}],
	shows: [{
		city: String
	}]
});

var Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
