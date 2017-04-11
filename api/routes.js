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
		var newEmail = {
			from: req.body.from,
			to: req.body.to,
			subject: req.body.subject,
			text: req.body.text
		};

		console.log("Sending message ...")

		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'marcos.hosoya@usp.br',
				pass: '140283782i!'
			}
		});

		var mailOptions = {
			from: newEmail.from, // sender address
			to: newEmail.to, // list of receivers
			subject: newEmail.subject, // Subject line
			text: newEmail.text // plain text body
		};

		var finalResponse = null;
		transporter.sendMail(mailOptions , function(error, info){  //callback
			if(error){
				console.log(error);
			}else{
				finalResponse = info.messageId;
				console.log("Message sent: "  +  info.response);
			}
			transporter.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.

			res.send(finalResponse)
		});

	});

};