const express = require("express");
const fs = require("fs");
const mysql = require("mysql2");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/user/:id",(req,res)=>{
    let userId = req.params.id;

    let connection = mysql.createConnection({
        host:"localhost",
        user : "root",
        password:"root",
        database:"ajax"
    })

    connection.connect(function(error){
        if(error) throw error;
        let sql = `SELECT * FROM USERS WHERE ID = '${userId}'`
        connection.query(sql,(error,data)=>{
            if(error) throw error;
            res.send(data)
        })


    })

})

app.listen(3000,()=>{
    console.log("server is running")
})
