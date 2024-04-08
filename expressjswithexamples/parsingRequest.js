const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRouter = require('./routes/admin');
const homeRouter = require('./routes/home');

const app = express()
const port = 5000;

// This function we need to execute, we can have options to configure (optional)
// It registers the middleware and it will parse whole request body which we will do it manually.
// We will get javascript object (Key/Value Pair).
// extended to false, it will able to parse non-default features

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(homeRouter);
app.use('/admin',adminRouter);

app.use((req,res,next) =>{
    //res.status(404).send('<h1>Page was not found!</h1>')
    res.sendFile(path.join(__dirname,'./','views','404.html'))
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })
    