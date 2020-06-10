const { Given, When, Then } = require('eol-ft-runner');
const { Driver } = require('../../node_modules/eol-ft-runner/utils/driver');
  


/**
 * PAGE OBJECTS
 */
var page = {
  url: 'https://www.google.com/',
  searchInputClassName: 'gLFyf gsfi',
  searchButtonClassName: 'gNO89b',
  searchResultsClassName: 'g'
};

/**
 * STEP DEFINITIONS
 */
Given('User is in the Google webpage', async function () {
  /** @implements {Driver} */
  await this.driver.navigateTo(page.url);
});

When('User searches for {string}', async function (text) {
  await this.driver.type('className', page.searchInputClassName, text);
  const elems = await this.driver.waitForElements('className', page.searchButtonClassName);
  elems[elems.length-1].click();
});

Then('User should see {string} in the search results', async function (text) {
  await this.driver.waitUntilTextContains('className', page.searchResultsClassName, text);
});

// All this.driver class methods --> node_modules/eol-ft-runner/utils/driver.js