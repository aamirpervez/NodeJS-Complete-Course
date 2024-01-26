var path = require("path");

// //Get file dirname
// console.log(
//   path.dirname("C:/Node JS Projects/pathmodulewithexamples/index.js")
// );

// //Get file extension
// console.log(
//   path.extname("C:/Node JS Projects/pathmodulewithexamples/index.js")
// );

// //Get file name
// console.log(
//   path.basename("C:/Node JS Projects/pathmodulewithexamples/index.js")
// );

//

// console.log(path.parse("C:/Node JS Projects/pathmodulewithexamples/index.js"));

// const pathDetails = path.parse(
//   "C:/Node JS Course/Presentations/PATH Module in Node JS.pptx"
// );

// console.log(pathDetails.name);

//console.log(path.isAbsolute("Node JS Projects"));

//console.log(path.delimiter);
//console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));
