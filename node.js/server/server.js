const http = require("http")
const PORT = 3000
const fs = require('fs')

// const server =  http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.readFile('../server/index.html',(error,data)=>{
//         if(error){
//             res.writeHead(404)
//             res.write("page not found")
//         }
//         else{
//             res.write(data)
//         }
//         res.end()
//     })
//     // res.write("hello")
//     // res.end()
// })

// server.listen(PORT,(error)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log('Server is running on '+PORT)

//     }
// })


const fsPromises = require("fs").promises
const path = require("path")
const log_events = require("../nodejs/logEvents")
const EventEmitter = require("events")

class MyEmitter extends EventEmitter{ }

const myemitter = new MyEmitter()

myemitter.on('log',(msg,fileName)=> logEvents())