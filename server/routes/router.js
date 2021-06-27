const express = require("express");
const router = express.Router();
const {
  test,
  postTest,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

//Test
router.get("/test/:id", test);
router.post("/post", postTest);

router.get("/", getUsers);
router.post("/create", createUser);
router.post("/update/:id", updateUser);
router.post("/delete/:id", deleteUser);

module.exports = router;
