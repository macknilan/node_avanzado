/**
 * Hola mundo middleware
 */

function hello(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hole mundo Oscar')
}

var connect = require('connect');
var app = connect();

app
	.use(hello)
	.listen(4000);