'use strict';

let Users = require('../models').users;

module.exports={

	list: list,
	create: create,
	get: get,
	update: update,
	delete:del

	};


function list(req,res){
	Users
	.find({},'-__v')
	.then(function(users){
		res.json(users);

	});
	
	
}

function create(req,res){


	let success = function(status){
		console.log(status);
		res
		.status(201)
		.json({
		message:'create'
		});

	};

	let error = function(err){
		console.log(err);
		res.status(400)
		.json({message:'Deu algo errado'});

	};

	let user = new Users(req.body);
	user
	.save()
	.then(success,error);
	console.log(user);

}

function get(req,res){

	Users
	.findById(req.params.id)
		.then(function(user){
			res
			.json(user);

		});
	
	

}

function update(req,res){
	res
	.status(200)
	.json({message:'updated'});
}

function del(req,res){
	res
	.status(200)
	.json({message:'deleted'});
}