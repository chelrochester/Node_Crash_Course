// These are useful for when building apps that interact with your system

const os = require('os');

// get the OS platform (windows, mac, linux)
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
// console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir());

// uptime > total amount of time system has been up
console.log(os.uptime());