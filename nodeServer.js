const http = require("http");

// http module has a createServer method
// takes 1 argument that is a callback
// the callback has 2 args: req, res object

const server = http.createServer((req, res) => {
  // console.log(req);
  // res = our way of responding to the request

  // writeHead takes in two arguments, status code and object for the mime-type
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hello world!</h1>");
  res.end();
  // console.log(res);
});

// createServer returns an object with listen method
// listen takes one arg: port to listen for http traffic

server.listen(3030);
