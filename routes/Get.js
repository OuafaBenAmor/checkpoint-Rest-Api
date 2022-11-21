const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

//get
router.get("/", (req, res) => {
  User.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
module.exports = router;
