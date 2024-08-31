const logEvents = require("./logEvents")


const evensts = require('events');
// // const fsPromises = require('fs').promises
class MyEmitter extends evensts.EventEmitter {}
const myEmitter = new MyEmitter();



myEmitter.on('log', (msg) => {
    console.log('hello')
    logEvents(msg);
})

myEmitter.emit('log','This is emitted')


// const EventEmitter = require('events');

// // Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// // Define an event and attach a listener
myEmitter.on('myEvent', (data) => {
    console.log('Event received with data:', data);
});

// // Emit the event
myEmitter.emit('myEvent', { message: 'Hello, World!' })



// // const fs = require("fs");
// // fs.o

const http = require('http');

// // Create an HTTP server
const server = http.createServer();

// Event: 'request'
// This event is emitted when a new HTTP request is made.
server.on('request', (req, res) => {
    console.log('Request received');
    // Send a simple response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// Event: 'connection'
// This event is emitted when a new TCP stream is established.
server.on('connection', (socket) => {
    console.log('Connection established from:', socket.remoteAddress);
});

// Event: 'close'
// This event is emitted when the server is closed.
server.on('close', () => {
    console.log('Server closed');
});


setTimeout(() => {
    server.close();
}, 5000)
// Event: 'listening'
// This event is emitted when the server has been bound after calling server.listen().
server.on('listening', () => {
    const address = server.address();
    console.log(`Server is listening on ${address.address}:${address.port}`);
});
// Listen on port 3000
console.log('welcome to all every body')

// server.listen(2000, '127.0.0.1');

// Event: 'error'
// This event is emitted when an error occurs.




// const fs = require('fs');

// const readableStream = fs.createReadStream('../nodejs/logs/eventFile.txt');

// readableStream.on('open', () => {
//     console.log('File is open');
// });

// readableStream.on('data', (chunk) => {
//     console.log(`Received chunk: ${chunk}`);
// });

// readableStream.on('end', () => {
//     console.log('End of file');
// });

// const http = require("http")

// const server = http.createServer((req, res) => {
//     // Simulating an error during the processing of the request
//     throw new Error('Simulated server error');
// });

// // Event: 'error'
// // This event is emitted when an error occurs.
// server.on('error', (error) => {
//     console.log('Server error:');
// });

// Listen on port 3000
// console.log('welcome to all')
server.listen(4000, '127.0.0.1', () => {
    console.log('Server is listening on port 4000');
});