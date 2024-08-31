 const express = require('express');
 const app = express();
 const path = require('path')
 const pathFile = path.join(__dirname,'index.html');

 app.get('/',(req,res)=>{
    res.sendFile(pathFile)
 })

 app.get('/request',(req,res)=>{
    res.send('<h1>hello world </h1>')
 })

 app.listen(4000,()=>{
    console.log('Server is running')
 })