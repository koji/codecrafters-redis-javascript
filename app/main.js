const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

let store = {}

const convertValue = (input) => {
  const value = input.toString()
  return `+${value}\r\n`
}

const parseInput = (input) => {
  const convertedInput = input.toString()
  const commands = convertedInput.split('\r\n')
  return {
    command: commands[2].toLowerCase(),
    key: commands[4],
    value: commands[6],
  }
}

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  //   // Handle connection
  connection.on('data', (data) => {
    // const returnValue = convertValue(data)
    const { command, key, value } = parseInput(data)
    switch (command) {
      case 'echo':
        connection.write(`+${key}\r\n`)
        return

      case 'set':
        connection.write(`+OK\r\n`)
        return

      case 'get':
        const storedKey = store[key] ? `+${store[key]}\r\n` : '$-1\r\n'
        connection.write(`+${storedKey}\r\n`)
        return

      case 'pong':
      default:
        connection.write(`+PONG\r\n`)
        return
    }
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
