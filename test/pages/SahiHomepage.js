var SahiHomePage = function() {
  //page elements
  this.footer = element(by.tagName('footer'))
    .all(by.tagName('ul'))
    .first()
    .all(by.tagName('li'))
    .get(4)
    .all(by.tagName('span'))
    .all(by.tagName('a'));

  //methods
  this.url = () => {
    return browser.getCurrentUrl();
  };

  this.salesEmail = () => {
    const salesEmail = this.footer.get(0);
    return salesEmail.getText();
  };

  this.supportEmail = () => {
    const supportEmail = this.footer.get(1);
    return supportEmail.getText();
  };

  this.phoneNumber = () => {
    const phoneNumber = this.footer.get(2);
    return phoneNumber.getText();
  };
};
module.exports = new SahiHomePage();
