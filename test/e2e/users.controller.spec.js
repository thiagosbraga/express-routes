'use strict';

var app = require('../../app.js');

var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-things'));

describe('Users Controller', function(){
	describe('.list- GET /users', function(){
		it('Shold return a array json',function(done){
			request(app)
				.get('/users')
				.end(function(err,res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					done();
				})
		})
	})

	describe('.create- POST /users', function(){
		it('Shold create a user ',function(done){
			request(app)
				.post('/users')
				.end(function(err,res){
					expect(res.statusCode).to.be.equal(201);
					
					done();
				})
		})
	})

	describe('.get- GET /users:id', function(){
		it('Shold return a user ',function(done){
			request(app)
				.get('/users/1')
				.end(function(err,res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.have.a.property('nome')
					.to.be.a.equal('Thiago');
					done();
				})
		})
	})

	describe('.update- PUT /users:id', function(){
		it('Shold update a user ',function(done){
			request(app)
				.put('/users/1')
				.end(function(err,res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.have.a.property('message')
					.to.be.a.equal('updated');
					
					done();	
				})
		})
	})
	describe('.delete- DELETE /users:id', function(){
		it('Shold delete a user ',function(done){
			request(app)
				.delete('/users/1')
				.end(function(err,res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.have.a.property('message')
					.to.be.a.equal('deleted');
					done();
				})
		})
	})
		

});