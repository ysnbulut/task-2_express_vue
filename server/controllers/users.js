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

const best = async (req, res) => {
  res.send("Şebnem Ferah");
};

module.exports = {
  getUsers,
  best,
  test,
};
