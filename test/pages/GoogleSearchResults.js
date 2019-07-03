var GoogleSearchResults = function() {
  //page elements
  this.topLink = element
    .all(by.css('.g'))
    .first()
    .element(by.tagName('cite'));

  //methods
  this.clickTopLink = () => {
    this.topLink.click();
  };
};
module.exports = new GoogleSearchResults();
