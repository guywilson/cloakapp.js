const port = process.env.PORT;

var cloak = require('filecloak');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var inputFile = '';

/*
** Render landing page...
*/
app.get('/', function (req, res) {
	res.render(
			'index', 
			{
				inputFile: inputFile
			});
})

/*
** Handle page not found errors...
*/
app.all('*', function(req, res) {
	var errorText = 'Resource not found on this server "' + req.url + '"';
	
	res.render('error', {
		errorText: errorText
	});
})

/*
** Listen for incoming requests..
*/
app.listen(port, function () {
	console.log('Weather app listening on port: ' + port);
	console.log('Is debug mode on: ' + isDebug);
})
