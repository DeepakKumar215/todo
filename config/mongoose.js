// Require library

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list_db');

let db =mongoose.connection;

db.on('error', console.error.bind(console, 'error to connection'));

db.once('open' , function(){
	console.log('successfully connect to database');
});