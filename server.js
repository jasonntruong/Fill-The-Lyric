var http = require('http');
var express = require('express');
var path = require('path');
var socket = require('socket.io');

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

const io = socket(server)

const users = {}

io.on("connection", socket => {
  console.log("Made socket connection");
  socket.emit('chat-message', 'Hello World')
  
  socket.on('send-input', message => {
    socket.broadcast.emit('chat-message', message)
  })

  socket.on('new-player', name  => {
    users[socket.id] = name
    socket.broadcast.emit('player-connected', name)
  })

  socket.on('disconnect', message => {
    console.log("Player disconnected")
    socket.broadcast.emit('chat-message', 'Goodbye World')
  })
});