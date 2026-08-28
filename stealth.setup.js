import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import 'dotenv/config';
import { LoginPage } from './pages/login.page.js';

chromium.use(StealthPlugin());

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

async function main() {
  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    baseURL: 'https://practicesoftwaretesting.com/',
    });
  const page = await context.newPage();
  const loginPage = new LoginPage(page);
  await loginPage.mainLink();
  await loginPage.login(EMAIL, PASSWORD);

  await page.waitForTimeout(5000);

  console.log('URL:', page.url());
  console.log('Title:', await page.title());

  await browser.close();
}

main();