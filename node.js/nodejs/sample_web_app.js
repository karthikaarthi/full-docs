const http = require('http')
const url = require('url')


// const server = http.createServer((req,res)=>{
//     const parsedurl = url.parse(req.url,true)
//     console.log(parsedurl)
//     if(parsedurl.pathname === '/'){
//         res.writeHead(200,{"content-type":"text/html"}) ;
//         res.write("<h1>Home Page</h1>")
//         res.end()
    
//     }


//    else if(parsedurl.pathname === '/about'){
//         res.writeHead(200,{"content-type":"text/html"}) ;
//         res.write("<h1>About Page</h1>")
//         res.end()
    
//     }
//     else if(parsedurl.pathname === '/contact'){
//         res.writeHead(200,{"content-type":"text/html"}) ;
//         res.write("<h1>Contact Page</h1>")
//         res.end()
    
//     }
//     else {
//         res.writeHead(404,{"content-type":"text/html"}) ;
//         res.write("<h1> Page Not Found Error</h1>")
//         res.end()
    
//     }



//     // res.end(`<p>hello world</p>`)
// })

// server.listen(3000,()=>{
//     console.log('server is running on http://localhost:3000')
// })