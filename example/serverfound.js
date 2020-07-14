// import hole from '../hole.js';
// import fs from 'fs';
const hole = require('../hole.js');
const fs = require('fs');

let gophermap;
const app = hole.createServer(function (request, response) {
  if (request.url == '' || request.url == '/') {
    response.write(gophermap);
    response.end('.\r\n');
  } else {
    response.write('Welcome to ' + request.url);
    response.end('.\r\n');
  }
});

fs.readFile(__dirname + '/gophermap').then((contents) => {
  gophermap = contents;
  app
    .listen(7070, () => {
      console.log('Gopherapp started on port 7070');
    })
    .catch((err) => {
      console.error(`Could not read gophermap at ${err}`);
      process.exit(1);
    });
});
app.listen(7070, () => {
  console.log('Gopher app started on port 7070');
});
