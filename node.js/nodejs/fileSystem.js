
const fs=require('fs')
const path=require('path')

console.log(path.join(__dirname,'npm.txt'))

fs.readFile('./npm.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log('hello',path.join(__dirname))
  console.log(data);
}); 
// fs.readFile('../nodejs/data.txt', 'utf8',(err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); 
// console.log('hii')
// process.on('uncaughtException',err => {
//   console.error(`There was a uncatught error: ${err}`)
//   process.exit(1)
// })

// // hord code 

// const fs = require('fs')
// const path = require('path')
// const path = require('path')
// console.log(__dirname)
// console.log(path.join(__dirname,'data.txt'))
// fs.readFile(path.join(__dirname,'data.txt'),'utf8',(err,data)=>{
//   if (err) throw err

//   console.log(data)
// })
// process.on('uncaughtException',err => {
//   console.error(`There was a uncatught error: ${err}`)
//   process.exit(1)
// })


// fs.writeFile(path.join(__dirname,'data.txt'),'welcome to all',(err)=>{
//   if (err) throw err
//   console.log('Writting')
//   fs.appendFile(path.join(__dirname,'data.txt'),'Thank you',(err)=>{
//     if (err) throw err
//     console.log('Append')
//   })
//   fs.readFile(path.join(__dirname,'data.txt'),'utf8',(err,data)=>{
//     if (err) throw err
  
//     console.log(data)
//     console.log('read')
//   })
  
  
// })
// fs.appendFile(path.join(__dirname,'append.txt'),'New file',(err)=>{
//   if (err) throw err

//  console.log('rename')
// })


// fs.rename(path.join(__dirname,'data.txt'),path.join(__dirname,'rename.txt'),(err)=>{
//   if (err) throw err

//  console.log('rename')
// })






// console.log(__dirname)


// fs.writeFile(path.join(__dirname,'data2.txt'),'This is a content',(err)=>{
//   if(err) throw err
//   console.log('Writing completed')
  // fs.appendFile(path.join(__dirname,'data.txt'),'\n\n This is a append content',(err)=>{
  //   if(err) throw err
  //   console.log('Apend completed')
  // })
//   fs.rename(path.join(__dirname,'data2.txt'),path.join(__dirname,'rename.txt'),(err)=>{
//     if(err) throw err
//     console.log('Rename completed')
//   })

  
// })
  // fs.appendFile(path.join(__dirname,'data2.txt'),'\n\n This is a append content',(err)=>{
  //   if(err) throw err
  //   console.log('Apend completed')
  // })

  // fs.rename(path.join(__dirname,'data2.txt'),path.join(__dirname,'rename.txt'),(err)=>{
  //   if(err) throw err
  //   console.log('Rename completed')
  // })


  // const fsPromises = require('fs').promises

  //  const file = async () => {
  //   try{
  //     const data = await fsPromises.readFile(path.join(__dirname,'rename.txt'),'utf8')
  //     console.log(data)
  //     console.log('read')

  //     await fsPromises.writeFile(path.join(__dirname,'data.txt'),'hello')
  //     console.log('write')
  //     // console.log(__dirname)

  //     await fsPromises.appendFile(path.join(__dirname,'rename.txt'),'hello')
  //     console.log('append')

  //     const data1=await fsPromises.readFile(path.join(__dirname,'rename.txt'),'utf8')
  //     console.log(data1)
  //     console.log('read')
      
  //     await fsPromises.unlink(path.join(__dirname,'rename.txt'))
  //     console.log('delete')


  //   }
  //   catch(error){
  //     console.error(error)
  //   }
  //  }




  //  file()


   

