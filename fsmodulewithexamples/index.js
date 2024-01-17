const fs = require("fs");

//Task # 1
//fs.mkdirSync("Aamir");

//Task # 2
//fs.writeFileSync("Aamir/myfile.txt", "Welcome to FS Module with examples...");

//Task # 3
//fs.appendFileSync("Aamir/myfile.txt", " I hope you are enjoying...");

//Task # 4
// const data = fs.readFileSync("Aamir/myfile.txt", "utf8");
// console.log(data);

//Task # 5
//fs.renameSync("Aamir/myfile.txt", "Aamir/heynewfile.txt");

//Task # 6
fs.unlinkSync("Aamir/heynewfile.txt");

//Task # 7
fs.rmdirSync("Aamir");
