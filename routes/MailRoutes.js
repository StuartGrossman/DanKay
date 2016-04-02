var express = require('express');
var router = express.Router();
var config = require('../config.json');

router.post('/', function(req, res){
	console.log('route hit')
	var mail = req.body;
	console.log(req.body)
	
	var sendgrid  = require('sendgrid')(config.api_key);
		sendgrid.send({
		  to:       'dankaypc@qwestoffice.net',
		  from:     req.body.email,
		  subject:  req.body.subject,
		  text:     req.body.message
		}, function(err, json) {
		  if (err) { 

		  	res.send('error email could not send!')

		  	return console.error(err); 

		}
		  console.log(json);
		res.send('Email was sent!')
	});

})



module.exports = router;