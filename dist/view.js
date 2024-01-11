class Renderer {
  constructor(templateSelector, targetSelector) {
    this.template = Handlebars.compile($(templateSelector).html());
    this.target = $(targetSelector);
  }

  appendData(data) {
    this.target.empty();
    const renderedHTML = this.template(data);
    this.target.append(renderedHTML);
  }
}

const weatherRenderer = new Renderer("#weather-template", "#search-container");
