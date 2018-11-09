var mongoose = require('mongoose'); 

var designSchema = new mongoose.Schema({ 
  	name: {
  		type: String, 
  		unique: true, 
  		trim: true,
  		required: [true, 'Name is required'],
  	},
  	client: {
  		type: String, 
  		trim: true,
  		required: [true, 'Phone is required']
  	},
	width: {
		type: String, 
		trim: true,
		required: [true, 'Phone is required']
	},
	height: {
		type: String, 
		trim: true,
		required: [true, 'Phone is required']
	},
	stitches: {
		type: String, 
		trim: true,
		required: [true, 'Phone is required']
	}
});

exports.designSchema = designSchema;