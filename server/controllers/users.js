const Users = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const test = async (req, res, next) => {
  //burada params çok güzel geliyor
  res.status(200).send(req.params);
  next();
};

const postTest = async (req, res, next) => {
  res.status(200).send(req.body);
  next();
};

const getUsers = async (req, res) => {
  try {
    const listUsers = await Users.find();
    res.status(200).send(listUsers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const getUser = await Users.findOne({
      username: username,
    }).exec();
    if (!getUser) {
      res.status(400).send({ message: "User Bulunamadı!" });
    } else {
      if (await bcrypt.compare(password, getUser.password)) {
        const token = jwt.sign(
          { id: getUser._id, username: username },
          process.env.ENCRYPT_KEY
        );
        const response = {
          username: getUser.username,
          Authtoken: token,
        };
        res.status(200).send(response);
      } else {
        res.status(400).send({ message: "Password Hatalı!" });
      }
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, password: plainTextPassword, email } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);
  try {
    const createdUser = await Users.create({
      username: username,
      password: password,
      email: email,
    });
    res.status(200).send(createdUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//bu kısmı şifreli password için nasıl düzelticeksin?
const updateUser = async (req, res) => {
  try {
    const updatedUser = await Users.updateOne(
      {
        _id: req.params.id,
      },
      req.body
    );
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await Users.deleteOne({
      _id: req.params.id,
    });
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  test,
  postTest,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
