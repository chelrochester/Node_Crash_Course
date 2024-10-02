const http = require('http');

// Create a server object
http.createServer((req, res) => {
    // Write a response when we get a request
    res.write('Hello, World');
    res.end();
}).listen(5000, () => console.log('Server running')) //need to add on a port (5000) in order to run