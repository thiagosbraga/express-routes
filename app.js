'use strict';

let express = require('express');
let app = express();
let routers = require('./routers');
let config = require('./config');


console.log(config,app.get('env'));

app.use('/api',routers.api);

let mongoose = require('mongoose');



let urlDatabase =`mongodb://${config.db.host}/${config.db.name}`;
mongoose.connect(urlDatabase);


mongoose.connection.on('error',function(){

	console.log('database connection error');
});

mongoose.connection.once('open',function(){

	console.log('database connected');
	app.listen(3000,()=> console.log('> localhost:3000'));
});

module.exports = app;