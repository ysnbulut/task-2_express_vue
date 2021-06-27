const Users = require("../models/model");

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

const createUser = async (req, res) => {
  try {
    const createdUser = await Users.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(200).send(createdUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

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
  createUser,
  updateUser,
  deleteUser,
};
