const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("EXPRESS SERVER");
});

app.get("/get", (req, res) => {
  res.send("GET METHOD");
});

app.post("/post", (req, res) => {
  res.send("POST METHOD");
});

app.put("/put", (req, res) => {
  res.send("PUT METHOD");
});

app.delete("/delete", (req, res) => {
  res.send("DELETE METHOD");
});

app.listen(5000, () => console.log("Server Running: http://localhost:5000"));
