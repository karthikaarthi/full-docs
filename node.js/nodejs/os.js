const os = require("os")
// const fs= require("fs")
// const path = require("path")
// const notes = require('./logs/eventFile.txt.js')

// user = os.userInfo()
// console.log(user.username)
// // const name = user.username
// // fs.appendFile(path.join(--dirname +'file.txt'),`hello ${name}`)
// console.log(user.username)
// console.log(os.arch()); // Outputs something like 'x64' or 'arm'
// console.log(os.platform()); // Outputs 'darwin', 'win32', or 'linux'
// console.log(os.cpus());
// console.log(os.totalmem()); // Total system memory
// console.log(os.freemem());  // Free system memory
// console.log(os.networkInterfaces());
// console.log(os.userInfo());
// console.log(os.uptime());
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Operating System Platform: ${os.platform()}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces(), null, 2)}`);
console.log(`User Information: ${JSON.stringify(os.userInfo(), null, 2)}`);
console.log(`System Uptime: ${os.uptime()} seconds`);