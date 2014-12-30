var express = require('express');
var router = express.Router();

/* GET list de artistas */
router.get('/', function(req, res) {
	var artists  = [
		'justion',
		'shakira',
		'miley',
		'Marco Vichi'
	];
	res.render('artists/index', {artists:artists});
});

module.exports = router;
