const http = require('http')
const url = require('url')
// const server = http.createServer((req,res)=>{
//     const parsedurl = url.parse(req.url,true)
//     console.log(parsedurl)

//     res.statusCode = 200;
//     res.setHeader ("Content-Type",'text/html')
//     res.end(`<p>hello world</p>`)
// })

// server.listen(3000,()=>{
//     console.log('server is running on http://localhost:3000')
// })

const server = http.createServer();

server.on("temp", (req, res) => {

});


server.emit("temp");
server.emit("temp");
