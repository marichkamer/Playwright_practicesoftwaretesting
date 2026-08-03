import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import 'dotenv/config';

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

export const test = base.extend({
  authPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.mainLink();
    await loginPage.login(EMAIL, PASSWORD);
    await expect(loginPage.myAccount).toBeVisible();

    await use(page);
  },
});

export { expect };
