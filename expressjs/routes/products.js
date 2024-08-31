const express = require('express')
const router = express.Router()

// products
router.get('/',(req,res)=>{
    res.send('Get Request for products')
});
// products/get-product-details
router.get('/get-product-details',(req,res)=>{
    res.send('Get Request for specific products')
});


router.post('/create-products',(req,res)=>{
    res.send('list of users')

})

router.put('/udate-products',(req,res)=>{
    res.send('list of users')

})



router.get('/read-products',(req,res)=>{
    res.send('list of users')

})

router.get('/get-products-details',(req,res)=>{
    const userObj ={
        id:10,
        name:"cadd",
        lastName:"cae",
        status:true
    }

    res.send(userObj)

})


router.delete('/delete-products',(req,res)=>{
    res.send('list of users')

})


module.exports = router