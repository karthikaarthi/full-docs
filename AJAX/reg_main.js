const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const path = require("path")


const app = express();


const handlebars = exphbs.create({extname:".hbs"})
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs")



const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("./public"))



// Route
const routes = require("./server/routes/register") 
app.use('/',routes); 

// listen Port



app.listen(port , ()=>{
    console.log("Server is running on ",port)
})
