const express = require("express");
const router = express.Router();
const {
  test,
  postTest,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

//Test
router.get("/test/:id", test);
router.post("/post", postTest);

router.get("/", getUsers);
router.post("/login", getUser);
router.post("/create", createUser);
router.post("/update/:id", updateUser);
router.post("/delete/:id", deleteUser);

module.exports = router;
