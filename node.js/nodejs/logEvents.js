const _ = require("lodash")
const math = require("./math.js")
_.each([1,2,3,4,5,6],(item)=>{
    console.log(item+2)
})
console.log("hello welcome to all")
console.log('Thank you every one')
console.log(math.add(3,4))

// ^3.7.1",
//     "lodash": "^4.17.21",
//     "nodemon": "^3.1.0"

const { format } = require("date-fns")
const {v4:uuid} = require("uuid")
const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

const logEvents = async(mes)=>{
    const dateTime =`${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logItem = `${dateTime} \t ${uuid()}\t${mes}\n`
    console.log(logItem)

    try{
        // console.log(__dirname)
        if(!fs.existsSync(path.join(__dirname,'logs'))){
           await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem)
    }
    catch(err){
        console.error(err)

    }
}
module.exports = logEvents

