const fs = require('fs')
const path = require('path')
console.log(__dirname)
const rs = fs.createReadStream(path.join(__dirname,'big_data.txt'),{encoding:'utf8'})
const ws = fs.createWriteStream(path.join(__dirname,'new_big_data.txt'))
// console.log(rs)
// rs.on('data',(datachunk)=>{
//     // console.log(datachunk)
//     ws.write(datachunk)
// })

rs.pipe(ws)