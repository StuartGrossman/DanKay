var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var nodemailer = require('nodemailer');
var port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});
app.get('/what-we-offer', function(req, res) {
	res.render('what-we-offer');
});
app.get('/reviews', function(req, res){
	res.render('reviews')
})
app.get('/contact-us', function(req, res){
	res.render('contact-us')
})
app.get('/about', function(req, res){
	res.render('about')
})

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});

//mail service

// create reusable transporter object using the default SMTP transport
// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
//     to: 'grossman.stuart1@gmail.com, baz@blurdybloop.com', // list of receivers
//     subject: 'Message Recieved ✔', // Subject line
//     text: 'Thanks for sending us a message 🐴', // plaintext body
//     html: '<b>Message Recieved 🐴</b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });