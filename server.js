const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

app.use(express.json());
app.use("/user", require("./routes/Post"));
app.use("/user", require("./routes/Get"));
app.use("/user", require("./routes/Put"));
app.use("/user", require("./routes/Delete"));

const port = 5000;
app.listen(port, () => {
  console.log("Server has started!");
});
