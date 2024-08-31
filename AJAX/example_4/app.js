const express = require("express")
const app = express()
const path = require("path")


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/content",(req,res)=>{
    res.sendFile(path.join(__dirname,'data.json'))
})

app.listen(4000,()=>{
    console.log("server is running");
})