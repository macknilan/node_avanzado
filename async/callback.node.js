/**
*Ejemplo de callbacks estilo node
*/

artist.findevents({name:artists},function(err, events){
	if(err){
		return console.log("Ha habido un error , %s", err);
	}
	console.log(events);
})