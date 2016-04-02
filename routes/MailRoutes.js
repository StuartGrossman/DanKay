var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
	console.log('route hit')
	var mail = req.body;
	console.log(req.body)
	var key = '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'
	var sendgrid  = require('sendgrid')(key);
		sendgrid.send({
		  to:       'grossman.stuart1@gmail.com',
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