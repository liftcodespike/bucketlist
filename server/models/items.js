var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 3},
	description: {type: String, required: true, minlength: 3},
	status: {type: String, required: true, minlength: 3},
	_users: [{type: Schema.Types.ObjectId, ref:'User'}],
	created_by:{type: String, required: true, minlength: 3}
}, {timestamps: true})

mongoose.model('Item', ItemSchema)