const os = require("os");

//Check Arch
console.log(os.arch());

//Check Free Memory
console.log(`${os.freemem() / 1024 / 1024 / 1024}`);

//Check End of Line
//console.log(JSON.stringify(os.EOL));

//Check each logical cpu information
//console.log(os.cpus());

//Check Endianness
//console.log(os.endianness());

//Check Scheluding process prio..
//console.log(os.getPriority());

//Check home directory for the current user.
//console.log(os.homedir());

//Check OS Hostname
console.log(os.hostname());
