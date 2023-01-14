const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const convertValue = (input) => {
  return `+${input}\r\n`
}

const parseInput = (input) => {
  const convertedInput = input.toString()
  const commands = convertedInput.split('\r\n')
  return { command: commands[2], input: commands[4] }
}

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  //   // Handle connection
  connection.on('data', (data) => {
    // const returnValue = convertValue(data)
    const { command, input } = parseInput(data)
    switch (command) {
      case 'ECHO':
        connection.write(`+${input}\r\n`)
        break
      case 'PING':
        connection.write(`+PONG\r\n`)
        break
      default:
        console.log('check your command')
        break
    }
    return
  })

  connection.on('close', () => {
    console.log('Connection closed')
  })

  connection.on('error', (err) => {
    console.log('Connection error :', err)
  })
})
//
server.listen(6379, '127.0.0.1')
