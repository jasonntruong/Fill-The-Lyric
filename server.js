var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');
var socket = require('socket.io');
const { inherits } = require('util');


var app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/mainFillTheLyric.html');
});

app.get('/startFTL.html', (req, res) => {
  res.sendFile(__dirname + '/startFTL.html');
});

const server = app.listen(8080, () => {
  console.log('Example app listening at http://localhost:8080');
});

//Socket setup

const io = socket(server);

io.on("connection", socket => {
  console.log("Made socket connection");
  socket.emit('chat-message', 'Hello World')
  socket.on('send-input', message => {
    socket.broadcast.emit('chat-message', message)
  })
});

// const io = require('socket.io')(3000)

// io.on('connection', socket => {
//   socket.emit('chat-message', 'Hello World')
// })