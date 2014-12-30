var Artist = require('../lib/artist');

var justin = new Artist({
	name : 'Justino Ramirez',
	slug : 'justin-bieber',
	albums:[
		{title: 'Belive Acoustic', year: 2013, image: 'belive-acoustic'},
		{title: 'Belive', year: 2012, image: 'belive'},
		{title: 'Under The Mistletoe', year: 2011, image: 'under-the-mistletoe'},
		{title: 'My world 1.8', year: 2010, image: 'my-word-2.8'},
	],
	shows: [
		{city: 'bogota'},
		{city: 'peru'},
		{city: 'chile'},
		{city: 'argentina'},
		{city: 'mexico'},
		{city: 'uruguat'},
		{city: 'paraguat'}
	]
});

justin.save(function(err, justin){
	console.log('justino se agrego');
});

var shakira = new Artist({
	name : 'shakira',
	slug : 'shakira',
	albums:[
		{title: 'Belive Acoustic', year: 2013, image: 'belive-acoustic'},
		{title: 'Belive', year: 2012, image: 'belive'},
		{title: 'Under The Mistletoe', year: 2011, image: 'under-the-mistletoe'},
		{title: 'My world 1.8', year: 2010, image: 'my-word-2.8'},
	],
	shows: [
		{city: 'bogota'},
		{city: 'peru'},
		{city: 'chile'},
		{city: 'argentina'},
		{city: 'mexico'},
		{city: 'uruguat'},
		{city: 'paraguat'}
	]
});

shakira.save(function(err, shakira){
	console.log('shakis se agrego');
});

var miley = new Artist({
	name : 'miley cerote',
	slug : 'miley-cerote',
	albums:[
		{title: 'Belive Acoustic', year: 2013, image: 'belive-acoustic'},
		{title: 'Belive', year: 2012, image: 'belive'},
		{title: 'Under The Mistletoe', year: 2011, image: 'under-the-mistletoe'},
		{title: 'My world 1.8', year: 2010, image: 'my-word-2.8'},
	],
	shows: [
		{city: 'bogota'},
		{city: 'peru'},
		{city: 'chile'},
		{city: 'argentina'},
		{city: 'mexico'},
		{city: 'uruguat'},
		{city: 'paraguat'}
	]
});

miley.save(function(err, miley){
	console.log('shakis se agrego');
});