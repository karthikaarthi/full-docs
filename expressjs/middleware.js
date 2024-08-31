// middle var is part between req and res

const express = require("express")
const app = express()
const path = require("path")
const {logger} = require("./middleware/logevents")

// app.use((req,res,next)=>{
//     logEvents(`${req.method}/t${req.headers.origin}/t${req.url}`,'reqLog.txt')
//     console.log(`${req.method} ${req.path}`)
//     next()

// })
 

app.use(logger)
// Build in middlevar



app.use(express.urlencoded({extended:false}))

app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))


app.get('/currency(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','currency.html'))
})




// app.get('/index(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view','index.html'))
// })

// console.log(__dirname)
// app.get('/image(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view','image.html'))
// })

app.listen(7000)

// Custom middle var
// 1st type
// app.use(sayMyName)

// app.use(express.static(path.join(__dirname,'./public')))
// app.get("/",(req,res)=>{
//     console.log("After Middle Ware");
//     res.send("welcome to our website");

// })



// app.get("/",(req,res,next)=>{
//     console.log("After Middle Ware");
//     res.send("welcome to our website");//Waste this method
//     next()

// })



// function sayMyName(req,res,next){
//     console.log('In MiddleWare');
//     next()

// }

// 2nd type

// app.get('^/$|/index(.html)?',islogin,(req,res)=>{
//     console.log('After middleware')
//     console.log(req.user)
//     res.sendFile(path.join(__dirname,'view','currency.html'))
// })
// function islogin (req,res,next){
//     // console.log("In middleware",req.url)
//     if(req.query.islogin === 'true'){
//         console.log('login user')
//         req.user={'name':'karthi','age':34}
//         next()
//     }

//     else{
//         console.log('Access Denoied')
//     }
    
// }


// app.listen(4700)





