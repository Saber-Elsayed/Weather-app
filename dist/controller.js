class WeatherController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async renderSavedData() {
    // Get all cities from the model and render them
    await this.model.getAllCities();
    this.view.appendData({ cities: this.model.cities });
  }

  async renderCityData(cityName) {
    // Get data for a specific city from the model and render it
    await this.model.getCityData(cityName);
    this.view.appendData({ cities: this.model.cities });
  }

  async searchButtonHandler() {
    // Event handler for the search button
    const cityName = // Get the city name from the user input
      await this.renderCityData(cityName);
  }

  async saveButtonHandler(cityData) {
    // Event handler for save buttons
    await this.model.saveCity(cityData);
    this.view.appendData({ cities: [cityData] });
  }

  async removeButtonHandler(cityName) {
    // Event handler for remove buttons
    await this.model.deleteCity(cityName);
    this.view.appendData({ cities: this.model.cities });
  }
}

const weatherController = new WeatherController(weatherModel, weatherRenderer);
