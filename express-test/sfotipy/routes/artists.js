var express = require('express');
var router = express.Router();
var Artist = require('../lib/artist');

/* GET list de artistas */
router.get('/', function(req, res) {
	Artist.find({}, function(err, artists){
		if(err){
			return res.send(err);
		}
		res.render('artists/index', {artists:artists});
	});
});

module.exports = router;
