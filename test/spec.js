//test pages
const Google = require('./pages/GoogleSearch');
const GoogleSearchResults = require('./pages/GoogleSearchResults');
const SahiHomepage = require('./pages/SahiHomepage');

/**
  This test will go to http://www.google.com
  Search for "sahi automation tool"
**/
describe('go to google homepage', () => {
  it('should open chrome', () => {
    Google.getGoogleHomePage();
    expect(Google.pageTitle()).toEqual('Google');
  });
});
describe('search for sahi from google', () => {
  it('should return search results for "sahi automation tool"', () => {
    Google.search('sahi automation tool');
    expect(Google.pageTitle()).toEqual('sahi automation tool - Google Search');
  });
});

//  Click the top link for the searched phrase from Google search results page
describe('click top result from search', () => {
  it('should open https://sahipro.com/', () => {
    GoogleSearchResults.clickTopLink();
    expect(SahiHomepage.url()).toBe('https://sahipro.com/');
  });
});

/**
 methods to return the
 sales email,
 support email,
 and phone number
**/
describe('find sales email', () => {
  it('should return sales email', () => {
    expect(SahiHomepage.salesEmail()).toBe('sales@sahipro.com');
  });
});

describe('find support email', () => {
  it('should return support email', () => {
    expect(SahiHomepage.supportEmail()).toBe('support@sahipro.com');
  });
});

describe('find phone number', () => {
  it('should return phone number', () => {
    expect(SahiHomepage.phoneNumber()).toBe('+91 80 4865 7865');
  });
});
