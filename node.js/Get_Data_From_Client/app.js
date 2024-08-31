const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const path = require("path");


let formHTML = fs.readFileSync(path.join(__dirname,"form.html"));
let userDetailsHTML = fs.readFileSync(path.join(__dirname,"userDetails.html"));

const server = http.createServer();

server.on("request",(request,respose) => {

   let url = request.url;
   console.log(url)

   if(url == "/"){
       respose.writeHead(200,{"Content-Type" : "text/html"});
       respose.end(formHTML);
   }

   if(url == "/user"){

        request.on("data",(chunk) => {
            let data = Buffer.from(chunk).toString();
            console.log(data)
        
            let user = querystring.parse(data,"&");
            console.log(user)
        
            //change placeholder to value
            userDetailsHTML = String(userDetailsHTML)
                              .replace("{{%userName%}}",user.userName)
                              .replace("{{%userAge%}}",user.userAge)
                              .replace("{{%userEmail%}}",user.userEmail)
                              .replace("{{%userPassword%}}",user.userPassword)
                              .replace("{{%userDOB%}}",user.userDOB)
                              .replace("{{%userGender%}}",user.gender)
                              .replace("{{%course%}}",user.course)
                              .replace("{{%userHobbies%}}",user.hobbies)
                              .replace("{{%userAddress%}}",user.address);
                            
            respose.end(userDetailsHTML);
        });

   }

});

server.on("error",(error) => {console.log(error);});

server.listen(3000,() => {console.log("Server is Running ...."); });