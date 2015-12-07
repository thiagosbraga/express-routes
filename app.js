'use strict';

var express = require('express');
var app = express();
var routers = require('./routers');


app.use('/api',routers.api);

app.listen(3000,serverLogInit);

function serverLogInit(){

	console.log('> localhost:3000');

}

module.exports = app;