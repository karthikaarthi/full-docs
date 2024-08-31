const express = require('express')
const router = express.Router()

// product
router.get('/',(req,res)=>{
    res.send('Get Request for users')
});
// product/get-product-details
router.get('/get-user-details',(req,res)=>{
    res.send('Get Request for specific users')
});

router.get('/searchby-location',(req,res)=>{
    res.send('location of user: ')
})

router.get('/create-users/:key([0-9]{4})',(req,res)=>{
    res.send('location of user: '+req.params.key)
})

router.get('*',(req,res)=>{
    const resobj = {
        statusCode:404,
        statusMsg:"URL not found"
    }
    res.send(resobj)
})

router.get('/create-users/:key([a-zA-Z]{4})',(req,res)=>{
    res.send('location of user: '+req.params.key)
})


// router.get('/create-users)',(req,res)=>{
//     res.send('list of users')

// })

router.put('/udate-user',(req,res)=>{
    res.send('list of users')

})



router.get('/read-users',(req,res)=>{
    res.send('list of users')

})

router.get('/get-users-details',(req,res)=>{
    const userObj ={
        id:10,
        name:"cadd",
        lastName:"cae",
        status:true
    }

    res.send(userObj)

})


router.delete('/delete-user',(req,res)=>{
    res.send('list of users')

})


// /:key([0-9]{4}
// /:state/:city
// /:id
module.exports = router