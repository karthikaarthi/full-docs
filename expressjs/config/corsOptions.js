whiteList = ['https://www.w3schools.com','https://12.0.0.5500','https://localhost:3500']
const corsOptions = {
    origin:(origin,callback)=>{
        if(whiteList.indexOf(origin) !== -1 || !origin){
        callback(null,true);
    }
    else{
        callback(new Error('not allowed here'));
    }
},
 optionsSuccessStatus:200


}

module.exports = corsOptions