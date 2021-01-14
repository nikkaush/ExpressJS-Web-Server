const express = require("express");
const { get } = require("http");

const app = express();

// app object has few methods
// 1. get
// 2. post
// 3. put
// 4. delete
// 5. all - i will accept any method

// takes 2 args:
// 1. path
// 2. callback(req, res) to be called when http request matches the verb and path

app.get("/", (req, res) => {
  console.log("get was called");
});
app.post("/", (req, res) => {
  console.log("post was called");
});
app.delete("/", (req, res) => {
  console.log("delete was called");
});
app.put("/", (req, res) => {
  console.log("put was called");
});
// app.all("/", (req, res) => {
//   console.log("all was called");
// });

app.listen(3030, () => {
  console.log("started listening on 3030");
});
