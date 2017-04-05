const nodemailer = require('nodemailer');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.post('/mail', function (req,res) {
		console.log("hello");
		res.send("post ok")
	});

};