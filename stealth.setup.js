import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

chromium.use(StealthPlugin());

async function main() {
  const browser = await chromium.launch({
    headless: false,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://practicesoftwaretesting.com/', {
    waitUntil: 'domcontentloaded',
  });

  await page.waitForTimeout(5000);

  console.log('Title:', await page.title());
  console.log('URL:', page.url());

  await browser.close();
}

main();