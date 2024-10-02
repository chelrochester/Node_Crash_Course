const fs = require('fs');
const path = require('path');

// Create folder on our system > .mkdir takes in the path creation, options {}, and a callback
// fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
//     if(err) throw err;
//     console.log('Folder created.');
// });

// Create and write to file > second param becomes content you want to write instead of options
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello, World', function(err) {
//     if(err) throw err;
//     console.log('File written to.');

//     // Add to file > .writeFile overwrites what is on file, so to add you must use .appendFile
// fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I love node.js', function(err) {
//     if(err) throw err;
//     console.log('File written to.');
// });
// });

// Read file > .readFile takes in path and character encoding which is utf8
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', function(err, data) {
//         if(err) throw err;
//         console.log(data);
//     });

// Rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloWorld.txt'), function(err) {
    if(err) throw err;
    console.log('File renamed');
});