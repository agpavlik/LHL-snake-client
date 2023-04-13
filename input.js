
let connection;

//the stdin object returned by setupInput will allow us 
//to listen for keyboard input and react to it.
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// WASD logic
const handleUserInput = function (key) {
  if (key === 'p') {
     process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'j') {
    connection.write('Say: Hello players!');
  }
  if (key === 'k') {
    connection.write('Say: I am going to be the winner !');
  }
  if (key === 'l') {
   connection.write('Say: It was close!');
  }
};

// Export
module.exports = setupInput;
