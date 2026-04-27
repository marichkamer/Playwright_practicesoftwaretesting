import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/registration.page';
import { LoginPage } from '../pages/login.page';
import { registrationDataUser1 } from '../test-data/registration';

test.describe('Registration Tests', () => {
  test.beforeEach(async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.mainLink();
  });
  test('User registration', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);
    await registrationPage.register(registrationDataUser1);
    await expect(loginPage.forgotPassword).toBeVisible();
  });
});
