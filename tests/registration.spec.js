import { test, expect } from "../fixtures/login.fixture.js"
import { registrationDataUser1 } from '../test-data/registration';

test.describe('Registration Tests', () => {
  test.beforeEach(async ({ registrationPage }) => {
    await registrationPage.mainLink();
  });
  test('008-[REGISTRATION-01] User registration @auth', async ({ loginPage,registrationPage }) => {
    await registrationPage.register(registrationDataUser1);
    await expect(loginPage.forgotPassword).toBeVisible();
  });
});
