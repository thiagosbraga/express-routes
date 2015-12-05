'use strict';

module.exports={

	list: list,
	create: create,
	get: get,
	update: update,
	delete:del

	};


function list(req,res){

	var users = [
		{nome:'Thiago'},
		{nome:'Grazi'},
	];
	res.json(users);
}

function create(req,res){

	res
	.status(201)
	.json({
		message:'create'
	});
}

function get(req,res){

	console.log(req.params);

	var user = {nome:'Thiago'};
	res.json(user);
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