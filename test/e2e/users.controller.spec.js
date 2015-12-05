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
					expect(res.body)
					.all.have.property('name')
					.to.be.an('string');
					done();
				})

		});

		it('teste de comportamento 2',function(){


		});

	});

});