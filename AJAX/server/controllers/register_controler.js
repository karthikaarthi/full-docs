const mysql = require("mysql2");
const path = require("path");
const fs = require("fs");



let connection = mysql.createConnection({
    host:"localhost",
    user : "root",
    password:"root",
    database:"register"
})


exports.view = (req,res)=>{
    connection.connect((error,connection)=>{
        if(error) throw error;
        const url=path.join(__dirname,"..","..","form.html")
        res.sendFile(url);

    })
    
}


exports.save =(req,res)=>{
    console.log("Before connect");
    connection.connect((error,connection)=>{
        if(error) throw error;
        const {username,dob,password,email,cpassword,contact} = req.body;


        connection.query("insert into reg (name,dob,password,email,cpassword,contact) values (?,?,?,?,?,?)",[username,dob,password,email,cpassword,contact],(error,rows)=>{
        })
    })

}

exports.login =(req,res)=>{
    connection.connect((error,connection)=>{
        if(error) throw error;

        const url=path.join(__dirname,"..","..","login.html")
        res.sendFile(url);

        })
    
}


exports.register =(req,res)=>{
    connection.connect((error,connection)=>{
        if(error) throw error;
        const url=path.join(__dirname,"..","..","form.html")
        res.sendFile(url);
        })
    
}


exports.login_checking =(req,res)=>{
    connection.connect((error,connection)=>{
        if(error) throw error;
        const {password,email} = req.body;

        connection.query("select * from studs  ",[password,email],(error,rows)=>{
            if(!error){
                
                res.render("index",{rows})
                }
            else{
                console.log("Error in listing Data "+error);
            }
            })
        })
    
}


exports.adduser = (req,res) => {
    res.render("adduser");
}



exports.save =(req,res)=>{
    connection.connect((error,connection)=>{
        if(error) throw error;
        const {name,age,city} = req.body;


        connection.query("insert into studs (name,age,city) values (?,?,?)",[name,age,city],(error,rows)=>{
            if(!error){
                res.render("adduser",{msg:"User Details Added Success"})
            }
            else{
                console.log("Error in listing Data "+error)
            }
        })
    })

}

