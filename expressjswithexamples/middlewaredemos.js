const express = require('express')
const app = express()
const port = 5000;

app.use((req,res,next) => {
    console.log('This is first middleware functions..');
   // next();
   res.send('Hey, Welcome from first middleware function...')
})

app.use((req,res,next) => {
    console.log('This is second middleware functions..')
})

app.use((req,res,next) => {
    console.log('This is third middleware functions..')
})


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })