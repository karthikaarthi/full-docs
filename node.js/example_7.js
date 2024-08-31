const express = require("express")
const app = express()
const path = require("path")

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/post",(req,res)=>{
    console.log("post method");
})

app.patch("/patch",(req,res)=>{
    console.log("patch method");
})

app.delete("/delete",(req,res)=>{
    console.log("delete method");
})

app.listen(3000,()=>{
    console.log("Server is running");
})