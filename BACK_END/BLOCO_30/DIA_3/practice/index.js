const express = require('express');
const app = express();
const http = require('http').createServer(app);
const ping = require('./sockets/ping');
const chat = require('./sockets/chat');
const rooms = require('./sockets/rooms');

app.use(express.static(__dirname + '/public'));

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

ping(io);
// chat(io);
rooms(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/public/chat.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
