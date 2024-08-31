const express = require('express')
const app = express()
app.use(express.json())
const employees = require('./routes/api/employee')
const products = require('./routes/products')
const users = require('./routes/users')
app.use('/products',products)
app.use('/employees',employees)
app.use('/users',users)


/*

    E-commerce Application 
    -users
    -products
    -items
    -reviews
    -comments
    -images
    -videos
    -returns
*/

// app.post('/create-users',(req,res)=>{
//     res.send('list of users')

// })

// app.put('/udate-user',(req,res)=>{
//     res.send('list of users')

// })



// app.get('/read-users',(req,res)=>{
//     res.send('list of users')

// })

// app.get('/get-users-details',(req,res)=>{
//     const userObj ={
//         id:10,
//         name:"cadd",
//         lastName:"cae",
//         status:true
//     }

//     res.send(userObj)

// })


// app.delete('/delete-user',(req,res)=>{
//     res.send('list of users')

// })


// products
// app.post('/create-products',(req,res)=>{
//     res.send('list of users')

// })

// app.put('/udate-products',(req,res)=>{
//     res.send('list of users')

// })



// app.get('/read-products',(req,res)=>{
//     res.send('list of users')

// })

// app.get('/get-products-details',(req,res)=>{
//     const userObj ={
//         id:10,
//         name:"cadd",
//         lastName:"cae",
//         status:true
//     }

//     res.send(userObj)

// })


// app.delete('/delete-products',(req,res)=>{
//     res.send('list of users')

// })


app.listen(3500)
