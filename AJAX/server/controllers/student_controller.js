const exp = require("constants");
const mysql = require("mysql2");
const path = require("path");


let connection = mysql.createConnection({
    host:"localhost",
    user : "root",
    password:"root",
    database:"project_app_node"
})




exports.view = (req,res)=>{
    connection.connect((error,connection)=>{
        if(error) throw error;
        connection.query("select * from users",(error,rows)=>{
            if(!error){
                const url=path.join(__dirname,"..","..","views","index.hps")
                // console.log(rows[0]);
                res.render("index",{rows})
            }
            else{
                console.log("Error in listing Data "+error)
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


        connection.query("insert into users (name,age,city) values (?,?,?)",[name,age,city],(error,rows)=>{
            if(!error){
                res.render("adduser",{msg:"User Details Added Success"})
            }
            else{
                console.log("Error in listing Data "+error)
            }
        })
    })

}

exports.edituser = (req,res) => {
    const id = req.params.id;

    connection.connect((error)=>{
        if(error) throw error;

        connection.query("select * from users where id=?",[id],(err,rows)=>{
            if(!err){
                res.render("edituser",{rows});

            }
        })
    })
}


exports.edit =(req,res)=>{
    const id = req.params.id;
    connection.connect((error,connection)=>{
        if(error) throw error;
        const {name,age,city} = req.body;
        connection.query("update users set name=?,age=?,city=? where id =? ",[name,age,city,id],(error,rows)=>{
            if(!error){
                
                connection.connect((error)=>{
                    if(error) throw error;
            
                    connection.query("select * from users where id=?",[id],(err,rows)=>{
                        if(!err){
                            res.render("edituser",{rows,msg:"User Details Edit Success"});
            
                        }
                    })
                })
            
            }
            else{
                console.log("Error in listing Data "+error)
            }
        })
    })

}



exports.delete =(req,res)=>{
    connection.connect((error)=>{
        if (error) throw error;
        const id = req.params.id;
        connection.query("delete from users where id =?",[id],(error,rows)=>{

            if(!error){
                res.redirect("/")
            }

        })

    })
}


