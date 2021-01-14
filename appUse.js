const express = require("express");

const app = express();

// Express is 2 things
// 1. Router
// 2. A series of middleware that comprises a web-framework
// req -> middleware -> res
// middleware function is any function that has access to the req, res and next objects

// req -> middleware -> res
// request comes in
// we need to validate the user sometimes
// we need to persist some data in db
// we need to parse the datae from the request
// response os sent out

// this is a middleware
function validateUser(req, res, next) {
  // get info from req
  // do some stuff with DB

  res.locals.validated = true;
  console.log("user validated...");
  next(); // hand control to next piece of middleware in the chain
}

app.use("/login", validateUser);

// here we will be running a middleware (req, res, next), and this will be the last middleware to run before the response is sent out
app.get("/", (req, res, next) => {
  res.send(`<h1> main page </h1>`);
  console.log(res.locals.validated);
});

app.get("/login", (req, res, next) => {
  res.send(`<h1> Login page </h1>`);
  console.log(res.locals.validated);
});

app.listen(3030, () => {
  console.log("started listening on 3030");
});
