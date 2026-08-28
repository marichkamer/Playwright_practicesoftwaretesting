import { test, expect } from '../fixtures/login.fixture.js';

test.describe('Login Tests', () => {
  test('007-[LOGIN-01] Log in with valid data @auth', async ({ authPage, loginPage }) => {
    await authPage;
    await expect(loginPage.myAccount).toBeVisible();
  });
});
