const _ = require("lodash")
// const math = require("./math.js")
_.each([1,2,3,4,5,6],(item)=>{
    console.log(item+2)
})
console.log('hello welcome to everybody')
// console.log("hello welcome to all")
// console.log('Thank you every one')
// console.log(math.add(3,4))

// ^3.7.1",
//     "lodash": "^4.17.21",
//     "nodemon": "^3.1.0"

const { format } = require("date-fns")
const {v4:uuid} = require("uuid")

console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'))
console.log(uuid())