var gopher = require('../gopher');

var app = gopher.createServer(function(request, response) {
	response.end('Welcome to ' + request.url);
});

app.listen(7070, function() {
	console.log('Gopher app started on port 7070');
});
