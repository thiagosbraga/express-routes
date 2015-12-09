'use strict';

let Router = require('express').Router;
let router = new Router();
let controllers = require('../controllers');
let bodyParser = require('body-parser');
let multer = require('multer')();

//habilita o body parser e passa a recever o body da requisicao
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
router.use(multer.array());

router
.route('/users')
.get(controllers.users.list)
.post(controllers.users.create)

router
.route('/users/:id')
.get(controllers.users.get)
.put(controllers.users.update)
.delete(controllers.users.delete)


module.exports = router;