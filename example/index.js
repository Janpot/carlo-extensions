const puppeteer = require('puppeteer');
const { withExtensions } = require('..');

(async () => {
  const browser = await puppeteer.launch(withExtensions([
    require('@npm-chrome-extensions/react-devtools')
  ], {
    headless: false,
    devtools: true
  }));
  const page = await browser.newPage();
  await page.goto('https://reactjs.org/');
})();
