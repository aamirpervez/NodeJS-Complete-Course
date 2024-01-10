const fs = require("fs");

//Creating new file  and append text in file
fs.writeFileSync("testfile.txt", "Hello, Welcome to Node Js Course.");
fs.appendFileSync("testfile.txt", " test demo data...");


// Read
// Buffer is a way to store and manipulate binary data in Node. js
// While reading file or recieve packets over the network we recieve in buffer.
const buff_data = fs.readFileSync("testfile.txt");
console.log(buff_data);
const actualText = buff_data.toString();
console.log(actualText);

fs.re