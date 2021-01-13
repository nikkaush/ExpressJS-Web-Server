// express is a 3rd party module
const express = require("express");
const { allowedNodeEnvironmentFlags } = require("process");

// an app is the express function (createApplication inside the Express module) invoked and is an Express Application
const app = express();

// all is a method, it takes 2 args:
// 1. route
// 2. callback to run if the method is requested
app.all("*", (req, res) => {
  // express handles the basic headers, status-code, mime-type, and end
  res.send(`<h1> this is the home page </h1>`);
});

app.listen(3030, () => {
  console.log("just started listening on 3030");
});
