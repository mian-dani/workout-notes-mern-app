const mongoose = require("mongoose");

//loginUser method

const loginUser = async (req, res) => {
  res.json({ mesg: "loginuser route working" });
};

//signupUser method
const signupUser = async (req, res) => {
  res.json({ mesg: "signupuser is working fine" });
};

module.exports = { signupUser, loginUser };
