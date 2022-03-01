const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
	description:{
		type: String,
		require: true
	},
	category:{
		type: String,
		require: true
	},
	date:{
		type: String,
		default: Date.now
	}
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;