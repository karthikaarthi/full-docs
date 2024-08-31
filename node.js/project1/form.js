// const http = require("http")
// const fs = require("fs")
// const formidable = require("formidable")

// http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write("<form action = 'biodata' method='post' enctype='multipart/form-data'>")
//         res.write("<h1> VJ TECHNO WIZARD </h1>")
//         res.write("Name <input type='text' name='username'><br>")
//         res.write("D.O.B <input type='text' name='dob'><br>")
//         res.write("Qualification <input type='text' name='qualification'><br>")
//         res.write("Email id <input type='email' name='mailid'><br>")
//         res.write("Phone number <input type='text' name='pno'><br>")
//         res.write("Upload your resume <input type='file' name='uploadfile'><br>")
//         res.write("<input type = 'submit'><br>")
//         res.end();
//     }

//     else if(req.url == '/biodata'){
//         let form = new formidable.IncomingForm()
//         form.parse(req,(err,fields,files)=>{
//             res.write("<h1>Name: "+fields.username + '</h1><br>')
//             res.write("<h1>DOB: "+fields.dob + '</h1><br>')
//             res.write("<h1>Qualification: "+fields.qualification + '</h1><br>')
//             res.write("<h1>Mail id: "+fields.mailid + '</h1><br>')
//             res.write("<h1>Pno: "+fields.pno + '</h1><br>')

//             let oldpath = files.uploadfile.path
//             console.log(oldpath)  
//             let newpath = 'C:/User/Student/Desktop'+files.uploadfile.name
//             console.log(newpath)
//             fs.rename(oldpath,newpath,(err)=>{
//                 if(err) throw err;
//                 res.write('<h1> Your File Location </h1> <br>')
//                 res.write('<h1> Old path: '+oldpath + ' </h1> <br>')
//                 res.write('<h1> Old path: '+newpath + ' </h1> <br>')
//                 res.end("<h1>Thanks for your interest in VJ TECNO WIZARD! Your form ! your form submition successfully</h1>")
//             })
//             // res.end()

//         })

//     } 
//     else{
//         res.end('<h1>404 File not found</h1>')
//     }
  
// }).listen(2000)




const http = require("http");
const fs = require("fs");
const formidable = require("formidable");

http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<form action='biodata' method='post' enctype='multipart/form-data'>");
        res.write("<h1> VJ TECHNO WIZARD </h1>");
        res.write("Name <input type='text' name='username'><br>");
        res.write("D.O.B <input type='text' name='dob'><br>");
        res.write("Qualification <input type='text' name='qualification'><br>");
        res.write("Email id <input type='email' name='mailid'><br>");
        res.write("Phone number <input type='text' name='pno'><br>");
        res.write("Upload your resume <input type='file' name='uploadfile'><br>");
        res.write("<input type='submit'><br>");
        res.end();
    } else if (req.url == '/biodata') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h1>Name: " + fields.username + '</h1><br>');
            res.write("<h1>DOB: " + fields.dob + '</h1><br>');
            res.write("<h1>Qualification: " + fields.qualification + '</h1><br>');
            res.write("<h1>Mail id: " + fields.mailid + '</h1><br>');
            res.write("<h1>Pno: " + fields.pno + '</h1><br>');

            let oldpath = files.uploadfile.path;
            console.log(oldpath);
            let newpath = 'C:/Users/Student/Desktop/' + files.uploadfile.name;  // Corrected path
            console.log(newpath);
            fs.rename(oldpath, newpath, (err) => {
                if (err) throw err;
                res.write('<h1> Your File Location </h1> <br>');
                res.write('<h1> Old path: ' + oldpath + ' </h1> <br>');
                res.write('<h1> New path: ' + newpath + ' </h1> <br>');
                res.end("<h1>Thanks for your interest in VJ TECHNO WIZARD! Your form submission was successful</h1>");
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 File not found</h1>');
    }
}).listen(2000);
