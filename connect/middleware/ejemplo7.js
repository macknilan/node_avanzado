/**
 * Middleware que muestra un panel de admin
 */

//http://localhost:3000/admin
//http://localhost:3000/admin/users
function admin(req, res, next){
	switch (req.url){
		case '/':
			res.end('try /users');
			break;
		case '/users' :
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringfy(['freddy','cvander', 'leonidas','camilo']));
			break;
	}	
}