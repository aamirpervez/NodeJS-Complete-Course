const { error } = require('console');
const express = require('express');
const fsPromises = require('fs').promises
const app = express();
const port = 5000;

//synchronous code

// app.get('/',(req,res) =>{
//     throw new Error('My error message here...')
// })

// asynchronous code

// app.get('/',async (req,res) =>{
//  throw new Error('My error message here...')
//  //next()
// })

// //Behind the sceen express --- how it handles...
// try {
//     fn(req, res, next);
// } catch (err) {
//  next(err);
// }

app.get('/one', (req,res,next) => {
    fsPromises.readFile('./one.txt')
    .then(data => res.send(data))
    .catch(err => next(err)) //passing error to custom middleware function..
})

app.get('/two', (req,res,next) => {
    fsPromises.readFile('./two.txt')
    .then(data => res.send(data))
    .catch(err => 
        {
            //Custom props to manage error behaviour...
            err.type ='redirect'
            next(err)
        }) 
})

app.get('/error', (req,res,next) => {
    res.send('Hello, Its Custom Error Landing Page...')
});

//4 PARAMS FOR ERROR HANDLING IN MIDDLEWARE..
app.use((error,req,res,next) => {
    console.log('Error Handling Middleware Called!')
    console.log('Path : ', req.path)
    console.log('Error : ', error)

    if(error.type === 'redirect')
    {
        res.redirect('/error')
    }
    else{
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })
  