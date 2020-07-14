const Server = require('./lib/server.js');

const hole = {};

hole.createServer = function createServer(handler) {
  var server = new Server(handler);
  return server;
};

module.exports = hole;
