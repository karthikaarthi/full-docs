const express = require("express")
const app = express()
const path = require('path')


// app.get('/hello(.html)?',(req,res,next)=>{
//     console.log('we loaded hello.html')
//     next()
// },(req,res,next)=>{
//     console.log("second function")
//     next()
// },(req,res)=>{
//     console.log("Third function")
// })


// Chaining

// const one = (req,res,next)=>{
//     res.sendFile(path.join(__dirname,'view','currency.html'))
//     console.log('function 1')
//     next()
// }

// const two = (req,res,next)=>{
//     console.log('function 2')
//     next()
// }

// const three = (req,res,next)=>{
//     console.log('function 3')
//     next()
// }

// const four = (req,res)=>{
//     console.log('function 4')
// }


// app.get('/chain(.html)?',[one,two,three,four])

// app.get('/chain(.html)?',[one,two,three,four])


// app.get('/old_currency(.html)?',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view','old_currency.html'))
// })

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'view','new_currency.html'))
// })

app.get('/old_currency(.html)?',(req,res)=>{
    res.redirect('../express.js/view/new_currency.html')
})


app.listen(3000)

