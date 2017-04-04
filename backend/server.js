'use script';

const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));
app.listen(5555);



app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});