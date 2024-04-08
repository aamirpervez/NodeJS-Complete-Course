const express = require('express');
const path = require('path')
const router = express.Router();

// router.get('/',(req,res,next) =>{
//     res.send('<h1>Welcome to home page..')
// })


router.get('/',(req,res,next) =>{
    res.sendFile(path.join(__dirname, '../','views','home.html'));
})


  module.exports = router;