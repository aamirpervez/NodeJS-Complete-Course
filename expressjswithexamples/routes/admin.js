const express = require('express');
const path = require('path');
const router = express.Router();

//admin/add-book
// router.use('/add-book',(req,res,next) =>{
//     res.send('<form action="/admin/book" method="POST"><input type="text" name="title"><button type="submit">Add Book</button></form>')
//  })
 
router.use('/add-book',(req,res,next) =>{
    res.sendFile(path.join(__dirname, '../','views','add-book.html'));
 })

 //admin/book --- POST
 router.use('/book',(req,res,next) =>{
     console.log(req.body)
     res.send('<h1>Added New Book : ' + req.body.title + ' Successfully!')
  })

  module.exports = router;