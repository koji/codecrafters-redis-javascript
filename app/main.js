const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const convertValue = (input) => {
  return `${input}\r\n`
}

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  //   // Handle connection
  connection.on('data', () => {
    // const returnValue = convertValue(data)
    connection.writable(`POMG\r\n`)
  })
})
//
server.listen(6379, '127.0.0.1')
