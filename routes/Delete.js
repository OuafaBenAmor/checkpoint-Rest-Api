const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

//delete  by id
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
module.exports = router;
