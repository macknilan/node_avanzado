/**
 * Montaje de middlewares
 */

var connect = require('connect');
var app = connect();

app
	.use('/admin', restrict)
	.use('/admin', admin)
	.use(hello)
	.listen(3000);
