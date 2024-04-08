var express = require('express');
var app = express();

const PORT =3000;

//www.google.com ====== / home page
//www.google.com/about ===== /about

app.get("/",(req,res) => {
  res.send("Hello, Welcome to Express JS Course with Aamir 12345!")
})

app.get("/about",(req,res) => {
    res.send("Hello, Welcome to About Page!")
  })

  app.get("/contact",(req,res) => {
    res.send("Hello, Welcome to Contact Page!")
  })

///// API

//GET, POST, PUT, DELETE ETC...
app.listen(PORT,(error) => {

    if(!error)
    {
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    }
	else{
		console.log("Error occurred, server can't start", error); 
    }
});