import { test, expect } from '../fixtures/auth.fixture.js';

test.describe('Login Tests', () => {
  test('007-[LOGIN-01] Log in with valid data @auth', async ({ loginPage, authenticationPage }) => {
    await authenticationPage;
    await expect(loginPage.myAccount).toBeVisible();
  });
});
