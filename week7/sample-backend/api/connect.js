const { Router } = require('express');
const authController = require('./auth/auth-controller')
const filesController = require('./files/files-controller')
const router = Router();

module.exports.connect = function (app, path) { //'/api'
	router.use('/auth', authController);
	router.use('/files', filesController);

	app.use(path, router);
}