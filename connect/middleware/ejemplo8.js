/**
 * Ejemplo completo
 */

var connect = require('connect');
var app = connect();

function hello(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hole mundo Oscar 2')
}

function logger(req, res, next){
	console.log('@backendpro %s %s', req.method, req.url);
	next();
}

function authWithDB(user, pass, cb){
	if(pass !== 'backend'){
		return cb('Credenciales incorrectas');
	}
	cb();
}

function restrict(req, res, next){
	var authorization = req.headers.authorization;
	
	if(!authorization){
		return next(new Error('unauthorized'));
	} 
		
	var parts = authorization.split(' ');
	var scheme = parts[0];
	var auth = new Buffer(parts[1], 'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	authWithDB(user, pass, function (err){
		if(err){
			return next(err);
		}
		next();
	});
}

function admin(req, res, next){
	switch (req.url){
		case '/':
			res.end('try /users');
			break;
		case '/users' :
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(['freddy','cvander', 'leonidas','camilo']));
			break;
	}	
}

//ADMINISTRADOR DE ERRORES : en consola ($ NODE_ENV=production node ejemplo8)
function errorHandler(){
	var env = process.env.NODE_ENV || 'development';
	return function(err, req, res, next){
		res.statusCode = 500;
		switch (env){
			case 'development':
				re.setHeader('Content-Type', 'application/json');
				break;
			default :
				res.end('Server error');
		}
	};
}

app
	.use(logger)
	.use('/admin', restrict)
	.use('/admin', admin)
	.use(hello)
	.use(errorHandler)
	.listen(4000);