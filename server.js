const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
const apiRoutes = require("./servers/routes/api");
const apiKey = "2e0c3a451c905b57bc89e4ae2d60e972";
mongoose.connect("mongodb://127.0.0.1:27017/DBweather", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/weather", async (req, res) => {
  try {
    console.log("hi");
    const cityId = "524901"; // Replace with the city ID of your choice
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    res.status(500).send("Internal Server Error");
  }
});
app.use("/servers/routes/api", apiRoutes);

const port = 3000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
