
//      Server creating

const express = require("express")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

const app = express()
const path = require("path")

const port = process.env.PORT|| 3500
app.use(express.static(path.join(__dirname,'./public')))
console.log(__dirname)
// app.get('/currency(.html)?',(req,res)=>{
//     // res.send("Hi Hello")
//     res.sendFile(path.join(__dirname,'view','currency.html'))
// })

// app.get('^/$|/currency(.html)?',(req,res)=>{
//     // res.send("Hi Hello")
//     res.sendFile(path.join(__dirname,'view','currency.html'))
// })

// app.use(express.static(path.join(__dirname,'./public')))

app.get('/digital_old_clock(.html)?',(req,res)=>{
    // res.send("Hi Hello")
    res.redirect(301,'currency.html')
})


app.get("/*",(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'404.html'))
})


app.listen(port,()=>{
    console.log("Server is running ",port)
})