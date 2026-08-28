import { test as pageTest, expect } from './pages.fixture.js';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import 'dotenv/config';

import { LoginPage } from '../pages/login.page.js';

chromium.use(StealthPlugin());

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

export const test = pageTest.extend({
  authenticationPage: async (_fixtures, use) => {
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

    await expect(page).toHaveURL(
      'https://practicesoftwaretesting.com/account'
    );

    await expect(loginPage.myAccount).toBeVisible();

    await use(page);

    await browser.close();
  },
});

export { expect };