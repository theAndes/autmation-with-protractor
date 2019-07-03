var Google = function() {
  // Navigate to a page which does not use Angular,
  browser.waitForAngularEnabled(false);

  //page elements
  this.googleSearchButton = element.all(by.name('btnK')).last();
  this.searchInputField = element(by.name('q'));

  //methods
  this.getGoogleHomePage = () => {
    browser.get('http://www.google.com');
  };

  this.search = keyWords => {
    this.searchInputField.sendKeys(keyWords);
    this.googleSearchButton.click();
  };
  this.pageTitle = () => {
    return browser.getTitle();
  };
};

module.exports = new Google();
