const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// How to get the serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Get the host (or root domain)
console.log(myUrl.host);

// Get Host name > the diff between hostname and host is that hostname doesn't get the port, whereas the host does
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Get the serialized query params
console.log(myUrl.search);

// Create an object from search params
console.log(myUrl.searchParams);

// Add a param to url > first passed through is variable (abc), second is value assigned to variable (123)
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})