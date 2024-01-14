const http = require("http");
const fs = require("fs");

function reqListenser(req, res) {}

//Create a Server in Node JS
//Anonymous func..

// const server = http.createServer(function(req,res){

// })

//Omit function keyword
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();

  // //Create Response
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html><head><title>My First Page</title></head>");
  // res.write("<body><h1>Welcome to Node JS Couse!!</h1>");
  // res.write("<h2>Sending respone from our first Server</h2></body>");
  // res.write("</html>");
  // res.end();

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFile("messages.txt", message, (err) => {
        //Handle your error messages

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>My First Page</title></head>");
  res.write("<body><h1>Welcome to message page.</h1>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
