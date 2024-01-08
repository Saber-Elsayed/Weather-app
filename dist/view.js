class Renderer {
  constructor(templateSelector, targetSelector) {
    this.template = Handlebars.compile($(templateSelector).html());
    this.target = $(targetSelector);
  }

  appendData(data) {
    // Append the data to the HTML using the Handlebars template
    const renderedHTML = this.template(data);
    this.target.append(renderedHTML);
  }
}

const weatherRenderer = new Renderer("#weather-template", "#weather-container");
