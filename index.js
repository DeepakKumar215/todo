const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const port = 8000;

const mongoose = require('./config/mongoose');
const Contact = require('./models/model.js');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));

app.use(express.static('asset'));


var contactList = [
	{
		description: "Vegetable",
		category: "Personal",
		date: "2020-05-15"
	},
	{
		description: "Water",
		category: "Cleaning",
		date: "2021-10-30"
	},
	{
		description: "Money",
		category: "Saving",
		date: "2022-07-18"
	}
];

app.get('/', function(req, res){
	//console.log("get method contact call", req.myName)

	Contact.find({}, function(err, contacts){
		if(err){
			console.log('Error');
			return;
		}
		return res.render('home', {
		title: "My Contact Page",
		todo_list: contacts
		});

	});
});



app.post('/todo-list', function(req, res){

	Contact.create({
		description: req.body.description,
		category: req.body.category,
		date: req.body.date
	}, function(error, contactdata){
		if(error){
			console.log(error);
			return;
		}
		// console.log('*****', contactdata);
		return res.redirect('back');
	});

});

app.get('/delete-todo-list', function(req, res){

	let id = req.query.id;

	Contact.findByIdAndDelete(id, function(err){
		if(err){
		console.log('Error'); 
		return;}
		return res.redirect('back');

	});
});




app.listen(port, function(err){
	if (err) {
		console.log("Error :", err);
	}
	console.log("My express is running at port :", port);
});