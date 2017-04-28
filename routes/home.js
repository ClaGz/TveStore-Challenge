module.exports = function ( app ) {
	var home = app.controllers.home;
	app.get ( '/', home.index );
	app.post ( '/create', home.create );
	app.get ( '/edit', home.edit );
	//refatorar pra put
	app.post ( '/update', home.update );
	app.get ( '/list', home.list );
	app.delete ( '/delete', home.delete );
	
};


