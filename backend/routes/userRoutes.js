const express = require("express");

//controller imports
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//Login user
router.post("/login", loginUser);

//signup user
router.post("/signup", signupUser);

module.exports = router;
