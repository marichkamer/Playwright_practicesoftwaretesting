import { test, expect } from '../fixtures/fixture.js';
import { LoginPage } from '../pages/login.page.js';

test.describe('Login Tests', () => {
  test('007-[LOGIN-01] Log in with valid data', async ({ authPage }) => {
    const loginPage = new LoginPage(authPage);
    await expect(loginPage.myAccount).toBeVisible();
  });
});
