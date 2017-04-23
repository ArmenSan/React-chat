'use script';

const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));
app.listen(4444);



