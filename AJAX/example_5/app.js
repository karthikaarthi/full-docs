const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")

// app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/",(req,res)=>{
    let queryString = req.query;
    console.log(typeof queryString)
    let data =`Name: ${queryString.username} password: ${queryString.password}`;
    fs.writeFileSync(path.join(__dirname,"data.txt"),data);
    res.end("success")
})

app.listen(5000,()=>{
    console.log("server is running")
})

