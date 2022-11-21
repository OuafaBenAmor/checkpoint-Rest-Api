const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

//post
router.post("/newuser", (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, data) => {
    err ? console.log(err) : res.send("user was added");
  });
});

module.exports = router;
