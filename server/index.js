const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = require("./routes/router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("yasin sedayı çok seviyor....");
  //console.log(res.json({ sa: "hi" }));
});

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("DB Bağlantısı Yapıldı");
  })
  .catch((error) => {
    console.log(error.message);
  });

//const token = jwt.sign({ foo: "bar" }, "shhhhh");
//console.log(token);

app.use("/users", router);

app.listen(4443, () => {
  console.log("Server Başladı!");
});
