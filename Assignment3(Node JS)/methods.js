const http = require("http");

const server = http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.write("Node Server");
      res.end();
    } else if (req.url === "/get" && req.method === "GET") {
      res.write("Get method");
      res.end();
    } else if (req.url === "/post" && req.method === "POST") {
      res.write("Post method");
      res.end();
    } else if (req.url === "/put" && req.method === "PUT") {
      res.write("Put method");
      res.end();
    } else if (req.url === "/delete" && req.method === "DELETE") {
      res.write("Delete Method");
      res.end();
    } else {
      res.end("Invalid request");
    }
  })
  .listen(5000, () => console.log("server running on port 5000"));
