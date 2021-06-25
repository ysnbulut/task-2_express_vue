const express = require("express");
const router = express.Router();
const { getUsers, best, test } = require("../controllers/users");

router.get("/", getUsers);
router.get("/za", test);

module.exports = router;
