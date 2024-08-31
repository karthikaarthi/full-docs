let express = require('express');
let path = require("path")
let app = express()
// app.get('/',(req,res)=>{

    // console.log('Request:',req.app)
    //  console.log('Request:',req.baseurl)
    //  console.log('Request:',req.body)
    //  console.log('Request:',req.cookies)
    //  console.log('Request:',req.hostname)
    //  console.log('Request:',req.ip)
    //  console.log('Request:',req.params)
    //  console.log('Request:',req.path)
    //  console.log('Request:',req.protocol)
    //  console.log('Request:',req.route)
    //  console.log('Request:',req.accepts)
    //  console.log('Request:',req.get)
    //  console.log('Request:',res.headerSent)
    //  console.log('Request:',res.cookie
    //  )
//     res.send('Hello world')
//     // // res.send('hello world')

// })

// app.listen(3000,)

// app.method(PATH,HANDLER)

// app.get('/',(req,res)=>{
//     res.send('Home Page')
// })

// app.get('/about',(req,res)=>{
//     res.send('About Page')
// })

// app.get('/about.html',(req,res)=>{
//     res.send('About html')
// })

// app.get('/a b?cd',(req,res)=>{
//     res.send('Regular expression ?')
// })

// app.get('/ab+cd',(req,res)=>{   //it denote one or more
//     res.send('Regular expression +')
// })

app.get('/books/:booksid/page/:pageid',(req,res)=>{   //it denote one or more
    res.send(req.params)
})

app.get('/page/:form-:to',(req,res)=>{   //it denote one or more
    res.send(req.params)
})


app.get(/a/,(req,res)=>{
    res.send('/a/')
})



app.listen(5000)

const port = process.env.PORT|| 6500
// console.log(__dirname)
// app.get('/currency(.html)?',(req,res)=>{
//     // res.send("Hi Hello")
//     res.sendFile(path.join(__dirname,'view','currency.html'))
// })

app.get('^/$|/currency(.html)?',(req,res)=>{
    // res.send("Hi Hello")
    res.sendFile(path.join(__dirname,'view','currency.html'))
})

// app.get('/old_currency(.html)?',(req,res)=>{
//     // res.send("Hi Hello")
//     res.redirect(302,'index.html')
// })


// app.get("/*",(req,res)=>{
//     // res.status(404).
//    res.sendFile(path.join(__dirname,'view','404.html'))
// })


app.listen(port,()=>{
    console.log("Server is running ",port)
})




