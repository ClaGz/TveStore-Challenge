module.exports = function ( app ) {
	var Schema = require ( 'mongoose' ).Schema,
	objectId = Schema.ObjectId;
	
	var ProjectSchema = new Schema ( {
		name: { type: String, required: true }, 
		description: { type: String, required: true },
		initialDate: { type: Date, required : true },
		finalDate: { type: Date, required : true }
	} );
	
	return db.model ( 'Project', ProjectSchema );
};
