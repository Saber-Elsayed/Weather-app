const mongoose = require("mongoose");

const weatherDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  conditionPic: {
    type: String, // Assuming you store the image URL or file path as a string
    required: true,
  },
});

const WeatherData = mongoose.model("WeatherData", weatherDataSchema);

module.exports = WeatherData;
