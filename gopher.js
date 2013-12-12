var Server = require('./lib/server');

var gopher = {};

gopher.createServer = function createServer(handler) {
	var server = new Server(handler);
	return server;
};

module.exports = gopher;
