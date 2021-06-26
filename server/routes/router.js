const express = require("express");
const router = express.Router();
const { getUsers, createUser, updateUser } = require("../controllers/users");

router.get("/", getUsers);
router.get("/create", createUser);
router.get("/update", updateUser);
module.exports = router;
