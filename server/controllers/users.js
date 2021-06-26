const Users = require("../models/model");

const test = async (req, res) => {
  res.send("Selami Şahin");
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
      username: "furkan",
      password: "123456",
      email: "furkan@gmail.com",
    });
    res.status(200).send(createdUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await Users.where({
      _id: "60d707e4fe71fa101cf01184",
    }).update({
      email: "seda@gmail.com",
    });
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
};
