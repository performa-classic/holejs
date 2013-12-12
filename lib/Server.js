var net = require('net');

function Server(handler) {

	this.netServer = net.createServer(function(socket) {

		socket.setEncoding('ascii');

		socket.on('data', function(data) {

			var url = data.toString();
			url = url.substr(0, url.length - 2); // remove \r\n

			var request = {
				url: url
			};

			var response = {
				write: socket.write.bind(socket),
				end: socket.end.bind(socket)
			};

			handler(request, response);

		});

	});

};

Server.prototype.listen = function listen(port, callback) {
	this.netServer.listen(port || 70, callback || function() {});
};

module.exports = Server;
