const express = require('express')
const app = express()
const port = 3000;


const {users} = require('./users.json');

app.get('/', (req, res) => {
    res.send('Hello to Home Page!')
  })

  //Create Routes without parameters
//   app.get('/api/users/1', (req, res) => {
//      const userObj = users.find((user) => user.id === 1);
//     res.json(userObj);
//   })

  //Create Routes with parameters
  app.get('/api/users/:id', (req, res) => {

    const userID = parseInt(req.params.id);

    const userObj = users.find((user) => user.id === userID);
    
    if(!userObj){
        return res.status(404).send(`No user with the ID of ${userID}`)
      }

   res.json(userObj);
 })

  app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })
    