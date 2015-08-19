var net = require('net');

function Server(handler) {

	this.netServer = net.createServer( { allowHalfOpen: true }, function(socket) {

		var buf = Buffer([]);
		socket.on('data', function(data) {
			buf = Buffer.concat([buf, data]);
			var ascbuf = buf.toString('ascii')
			var eol = ascbuf.indexOf('\r\n');
			if (eol >= 0) {
				var tab = ascbuf.indexOf('\t');
				var srch;
				if (tab >= 0) {
					srch = tab + 1;
				} else {
					tab = srch = eol;
				}
				var request = {
					url: ascbuf.substring(0, tab),
					search: ascbuf.substring(srch, eol)
				};
				var response = {
					write: socket.write.bind(socket),
					end: socket.end.bind(socket)
				};
				handler(request, response);
			}
		});

	});

};

Server.prototype.listen = function listen(port, callback) {
	this.netServer.listen(port || 70, callback || function() {});
};

module.exports = Server;
