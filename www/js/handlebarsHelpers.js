Handlebars.registerHelper('setIndex', function (value) {
    this.index = Number(value + 1); //I needed human readable index, not zero based
});