const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
   // code that does something when the connection is first established
  console.log("Player is connected to the server");
  });
  return conn;
};

console.log("Connecting ...");
connect();













// stdin -- to collect what you type on your terminal
//          const net = require('net');
// keyboard controlls, this will track keystrokes and when press enter will send message
//          const keyboard = require('./controls');
// creates a connection to the server
//          const client = net.createConnection({host: '165.227.47.243', port: '50541'});
// sets encoding for incoming messages
//          client.setEncoding('utf8');
//          const name = 'Player Bob';
// whenever the messages come in from the server, THIS callback runs
//          client.on('data', (data) => {
//          console.log('data has come in!');
// we print the message that came in (data is the message)
//          console.log(data);
//          })
// we initialzed keyboard here so we can write messages to the server
//          keyboard.startKeyboard(client, name);
// initial hello the server
//          client.write(`${name}: Hello there!`);
// // The server credentials are:
// Web view: http://165.227.47.243:8081/
//  ^--- go here on your browser
// IP for client : 165.227.47.243
//  ^--- enter this in your .js code to connect to server
// Port for client : 50541