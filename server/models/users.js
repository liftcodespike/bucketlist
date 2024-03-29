var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	_items: [{type: Schema.Types.ObjectId, ref:'Item'}]
}, {timestamps: true})

mongoose.model('User', UserSchema)