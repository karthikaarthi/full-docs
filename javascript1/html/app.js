const express = require('express')
const bodyparser = require('body-parser')
const fs = require("fs")
const path = require("path")
const app = express()
const filePath = path.join(__dirname,'form.html')
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(filePath)
})

app.listen(5000,()=>{
    console.log("server is running")
})