const {logEvents} = require('./logevents')

const errorHandler =(err,req,res,next)=>{
    logEvents(`${err.name} : ${err.message}`,'errlog.txt');
    // console.log(err)
    res.status(500).send(err.message);
    next()
}

module.exports =errorHandler