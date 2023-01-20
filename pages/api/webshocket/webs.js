



import { Server } from 'ws';

const WebSocket = require('ws');


const wss = new WebSocket.Server({
  server: 'http://192.168.0.8:3000'
});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
  // Send data to the connected client
  ws.send('Hello, client!');
});