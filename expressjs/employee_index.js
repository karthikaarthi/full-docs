const express = require('express')
const app =express()
app.use(express.json())

app.use('/employees',require('./routes/api/employee1'))
app.listen(4000,()=>{
    console.log("Server is running on http://4000")
})

