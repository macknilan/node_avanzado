/**
*Ejemplo callbacks sencillo
*/

artist.findEvents({name:artist}, callback);

function callback(events){
	console.log(events);
}