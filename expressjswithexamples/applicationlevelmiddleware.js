const express = require('express')
const app = express();
const port = 5000;

// app.use || app.methodname (gte,put,post,delete)

// No Mount Path..
// app.use((req,res,next) =>{
//     console.log('This function will execute everytime...')
// })

// // With Mount Path..
// app.use('/users/:id',(req,res,next) =>{
//     console.log('This function will execute only on users path...')
// })

// With Mount Path.. we can multiple handlers functions on middleware fun...

// app.use('/users/:id',(req,res,next) =>{
//     console.log('This is function handler 1...');
//     next()
// },
// (req,res,next) =>{
//     console.log('This is function handler 2...')
// })


// app.get('/users/:id',(req,res,next) =>{
//    if(req.params.id === '0') next('route')
//    else next()
// },
// (req,res,next) =>{
//     res.send('Welcome from Route 1...')
// });

// app.get('/users/:id',(req,res,next) =>{
//     res.send('Welcome from Route 2...')
//  })


//Middleare can also declare array (resuse)

function Test1(req,res,next){
    console.log('Test1 is executed!')
    next();
}

function Test2(req,res,next){
    console.log('Test2 is executed!');
    next();
}

const functionsObj = [Test1,Test2];

app.get('/users/:id',functionsObj,(req,res,next) =>{
       res.send('Arrays testing on middleware functions..')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })