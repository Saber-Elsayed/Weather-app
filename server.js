const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./servers/routes/api");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
const apiKey = "5ea4f711a758abe81d6616851f90a815";

const port = 3000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
