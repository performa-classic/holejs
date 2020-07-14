import net from 'net';

const Server = (handler) => {
  this.netServer = net.createServer({ allowHalfOpen: true }, (socket) => {
    let buf = Buffer.from([]);
    socket.on('data', function (data) {
      buf = Buffer.concat([buf, data]);
      const ascbuf = buf.toString('ascii');
      const eol = ascbuf.indexOf('\r\n');
      if (eol >= 0) {
        let tab = ascbuf.indexOf('\t');
        let srch;
        if (tab >= 0) {
          srch = tab + 1;
        } else {
          tab = srch = eol;
        }
        const request = {
          url: ascbuf.substring(0, tab),
          search: ascbuf.substring(srch, eol),
        };
        const response = {
          write: socket.write.bind(socket),
          end: socket.end.bind(socket),
        };
        handler(request, response);
      }
    });
  });
};

Server.prototype.listen = (port, callback) => {
  this.netServer.listen(port || 70, callback || function () {});
};

export default Server;
