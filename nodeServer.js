const http = require("http");

// file system module
// fs give node, access to this file system
const fs = require("fs");

// http module has a createServer method
// takes 1 argument that is a callback
// the callback has 2 args: req, res object

const server = http.createServer((req, res) => {
  // res = our way of responding to the request

  // adding routes to node webServer
  if (req.url === "/") {
    // writeHead takes in two arguments, status code and object for the mime-type
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>This is the home page./h1>");
    const homePageHTML = fs.readFileSync("node.html");
    res.write(homePageHTML);
    res.end();
  } else {
    // writeHead takes in two arguments, status code and object for the mime-type
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h3>Sorry this isn't the page you are looking for!</h3>");
    res.end();
  }
});

// createServer returns an object with listen method
// listen takes one arg: port to listen for http traffic

server.listen(3030);
