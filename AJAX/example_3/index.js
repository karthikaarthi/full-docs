const express = require('express')
const app = express()
const path = require('path')
const filePath = path.join(__dirname,'index.html')


app.get('/',(req,res)=>{
    res.sendFile(filePath)
})

app.get('/request',(req,res)=>{
    res.send("Response From Express Server....")
})

app.listen(3000,()=>{
    console.log('Server is running ...')
})

