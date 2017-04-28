module.exports = function ( app ) {
	
	var Project = app.models.project;
	var dateFormat = require ( 'dateFormat' );

	var HomeController = {
		index: function ( req, res ) {
			res.render ( 'home/index' );
		},
		
		create: function ( req, res ) {
			
			var project = new Project ();

			//REFATORAR
			project.name = req.body.name;
			project.description = req.body.description;
			project.initialDate = req.body.initialDate;
			project.finalDate = req.body.finalDate;

			project.save ( function ( err ) {
				if ( err ) {
					//Mostrar erros na pagina!
					res.render ( 'home/index', { error: err } );
				}
			} );

			res.redirect ( '/list' );
		},

		edit: function ( req, res ) {
			
			Project.findById ( req.query.id, function ( err, project ) {
				if ( err ) {
					//Mostrar erros na pagina!
					res.render ( 'home/edit', { error: err } );
				}

				//REFATORAR
				var viewObject = {
							id: project.id,
							name: project.name,
							description: project.description,
							initialDate: dateFormat ( project.initialDate, 'yyyy-mm-dd' ),
							finalDate: dateFormat ( project.finalDate, 'yyyy-mm-dd' )
						};

				res.render ( 'home/edit', { project: viewObject } );
			} );
		},

		update: function ( req, res ) {

			Project.findById ( req.body.id, function ( err, project ) {
				if ( err ) {
					//Mostrar erros na pagina!
					res.render ( 'home/edit', { error: err } );
				}

				//REFATORAR
				project.name = req.body.name;
				project.description = req.body.description;
				project.initialDate = req.body.initialDate;
				project.finalDate = req.body.finalDate;

				project.save ( function ( err ) {
					if ( err ) {
						//Mostrar erros na pagina!
						res.render ( 'home/edit', { error: err } );
					}
				} );

				res.redirect ( '/list' );
			} );
		},
		
		list: function ( req, res ) {
			
			Project.find ( function ( err, projects ) {
				res.render ( 'home/list', { projects: projects } );
			} );
		},

		delete: function ( req, res ) {
			
			Project.remove ( { _id: req.body.id }, function ( err, project ) {
				if ( err ) {
					//Mostrar erros na pagina!
					res.render ( 'home/edit', { error: err } );
				}

				res.json({ message: 'Successfully deleted' });

			} );
		}
	};

	return HomeController;
};