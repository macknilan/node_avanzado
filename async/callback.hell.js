/**
 *Ejemplo de callbacks Horribles
 */

artists.find({name: 'Miley'}, function(err, artist){
	artist.findEvents({city:'Bogota'}, function(err,concert){
		concert.finTickets({price: {$lt: 100}}, function(err, tickets){
			tickets.purchase({cc: 4242424242424242424}, function(err, transaction){
				customer.transaction = transaction;
				customer.save(function(err, savedCustomer){
					email.confirm(savedCustomer, transaction, function(err, status){
						res.send({
							tickets: 'purchased;'
						});
					});
				});
			});
		});
	});
});