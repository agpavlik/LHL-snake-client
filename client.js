const { IP, PORT } = require("./constants");

const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

// interpret incoming data as text
  conn.setEncoding("utf8");

// implement client name by sending it to the server
  conn.on('connect',() => {
    conn.write("Name: AGP");
  })
// receive data from server
  conn.on('data', (data) => { 
    console.log('Player has connected to game server!');
    console.log('Server says:', data);
})
  return conn;
};

module.exports = connect;

// // The server credentials are:
// Web view: http://165.227.47.243:8081/
//  ^--- go here on your browser
// IP for client : 165.227.47.243
//  ^--- enter this in your .js code to connect to server
// Port for client : 50541