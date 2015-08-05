var gopher = require('../gopher');

var app = gopher.createServer(function(request, response) {

	if (request.url == '' || request.url == '/') {

		response.write([
			'iWelcome to my Node-powered Gopher server.',
			'nothing',
			'nothing',
			0
		].join('\t'));
		response.write('\r\n');

		response.write([
			'0Why is Gopher Still Relevant?',
			'/gopher/relevance.txt',
			'gopher.floodgap.com',
			70
		].join('\t'));
		response.write('\r\n');

		response.write([
			'0Check out this other URL',
			'/something_else',
			'localhost',
			7070
		].join('\t'));
		response.write('\r\n');
		response.end('.\r\n');


	} else {

		response.write('Welcome to ' + request.url);
		response.end('.\r\n');

	}


});

app.listen(7070, function() {
	console.log('Gopher app started on port 7070');
});
