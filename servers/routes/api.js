const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.json());

// Define a City schema
const citySchema = new mongoose.Schema({
  name: String,
});

const City = mongoose.model("City", citySchema);

// Route to get city data by name
router.get("/city/:cityName", async (req, res) => {
  const cityName = req.params.cityName;

  try {
    const city = await City.findOne({ name: cityName });
    res.json(city);
  } catch (error) {
    console.error("Error fetching city data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get all city data from DB
router.get("/cities", async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to save a new city to DB
router.post("/city", async (req, res) => {
  const { name } = req.body;

  try {
    const newCity = new City({ name });
    await newCity.save();
    res.json(newCity);
  } catch (error) {
    console.error("Error saving city:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to delete a city from DB by name
router.delete("/city/:cityName", async (req, res) => {
  const cityName = req.params.cityName;

  try {
    const deletedCity = await City.findOneAndDelete({ name: cityName });
    res.json(deletedCity);
  } catch (error) {
    console.error("Error deleting city:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
