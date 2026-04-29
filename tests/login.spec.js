import { test, expect } from '../fixture.js';
import { LoginPage } from '../pages/login.page.js';

test.describe('Login Tests', () => {
  test('Log in with valid data', async ({ authPage }) => {
    const loginPage = new LoginPage(authPage);
    await expect(loginPage.myAccount).toBeVisible();
  });
});
