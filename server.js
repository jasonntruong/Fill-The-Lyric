var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/mainFillTheLyric.html');
});

app.get('/startFTL.html', (req, res) => {
  res.sendFile(__dirname + '/startFTL.html');
});

app.listen(8080, () => {
  console.log('Example app listening at http://localhost:8080');
});