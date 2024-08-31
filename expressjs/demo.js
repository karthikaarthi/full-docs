const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const {logger} = require('./middleware/logevents')
app.use(logger)

const whiteList=['https://www.w3schools.com/','https://localhost:4000','https://127.0.0.1:5500']

const corsOptions={
    origin:(origin,callback)=>{
        if(whiteList.indexOf(origin) != -1 || !origin){
            callback(null,true)
        }
        else{
            callback(new Error('not allowed by cors'))
        }
    },
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send('File is received')
})

app.listen(4000,()=>{
    console.log('4000')
})