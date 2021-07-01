const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./routes/router");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("ysnbulut");
  //console.log(res.json({ sa: "hi" }));
});

mongoose
  .connect(process.env.M_CONNECTION_URL, {
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

app.use("/users", router);

const PORT = process.env.PORT || 4443;

app.listen(4443, () => {
  console.log("Server Başladı!");
});
