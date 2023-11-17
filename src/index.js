const puppeteer = require('puppeteer');

let browser;
(async () => {
  browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://godo.co.in/login.php');

  const namePlaceholderText = 'Username';
  const passPlaceholderText = 'Password';
  const nameSelector = `input[placeholder="${namePlaceholderText}"]`;
  await page.waitForSelector(nameSelector, { visible: true });
  await page.type(nameSelector, process.env.USER);
  const passSelector = `input[placeholder="${passPlaceholderText}"]`;
  await page.waitForSelector(passSelector, { visible: true });
  await page.type(passSelector, process.env.PASS);
  const loginBtn = await page.$('button[type="submit"]');
  await Promise.all([loginBtn.click()], page.waitForNavigation());

  await page.goto('https://godo.co.in/myjobs.php');
  await page.waitForNavigation();
})()
  .catch((err) => console.log(err))
  .finally(async () => await browser.close());
