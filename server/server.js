const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = require("./routes/router");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("ysnbulut");
  //console.log(res.json({ sa: "hi" }));
});

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Bağlantısı Yapıldı");
  })
  .catch((error) => {
    console.log(error.message);
  });

const token = jwt.sign({ foo: "bar" }, "shhhhh");
console.log(token);

app.use("/users", router);

app.listen(4443, () => {
  console.log("Server Başladı!");
});
