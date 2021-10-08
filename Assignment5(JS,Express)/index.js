const express = require("express");
const app = express();

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// STATIC FILES
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.post("/postData", (req, res) => {
  const { fname, lname } = req.body;
  res.send(`FORM DATA SUBMITTED - First Name: ${fname} & Last Name: ${lname}`);
});

app.listen(5000, () => console.log("Server Running: http://localhost:5000"));
