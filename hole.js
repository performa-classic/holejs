import Server from './lib/server.js';

const hole = {};

hole.createServer = function createServer(handler) {
  var server = new Server(handler);
  return server;
};

export default hole;
