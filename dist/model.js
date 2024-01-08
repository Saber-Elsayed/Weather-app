class WeatherModel {
  constructor() {
    this.cities = [];
  }

  async getAllCities() {
    try {
      // Make a request to the server to get all cities
      const response = await fetch("/api/cities");
      const data = await response.json();

      // Update the model's data with the received cities
      this.cities = data;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }

  async getCityData(cityName) {
    try {
      // Make a request to the server to get data for a specific city
      const response = await fetch(`/api/city/${cityName}`);
      const data = await response.json();

      // Update the model's data with the received city data
      this.cities.push(data);
    } catch (error) {
      console.error(`Error fetching data for ${cityName}:`, error);
    }
  }

  async saveCity(cityData) {
    try {
      // Make a request to the server to save a city's data
      const response = await fetch("/api/saveCity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cityData),
      });

      // Update the model's data with the received data
      const savedCity = await response.json();
      this.cities.push(savedCity);
    } catch (error) {
      console.error("Error saving city:", error);
    }
  }

  async deleteCity(cityName) {
    try {
      // Make a request to the server to delete a city
      await fetch(`/api/deleteCity/${cityName}`, {
        method: "DELETE",
      });

      // Update the model's data by removing the deleted city
      this.cities = this.cities.filter((city) => city.name !== cityName);
    } catch (error) {
      console.error(`Error deleting ${cityName}:`, error);
    }
  }
}

const weatherModel = new WeatherModel();
