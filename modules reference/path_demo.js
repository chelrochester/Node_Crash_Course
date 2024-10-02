const path = require('path');
// the above is the way node imports modules from other files.  
// Node doesn't support 'import component from './filename';' like react 
// does since this is using ES6 which hasn't fully been made available to node yet


// Basename > gets the base file name without full path unlike only using __filename alone
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object > removing .base shows full options, and you can use any similarly to how base is currently used
console.log(path.parse(__filename).base);

// Concatenate paths > adds \test\hello.html after \reference in file path
// note: this works well with different delimiters; in windows the delimiter 
// is \ and in mac and linux it's / so this allows the correct delimiter to be put in 
console.log(path.join(__dirname, 'test', 'hello.html'));