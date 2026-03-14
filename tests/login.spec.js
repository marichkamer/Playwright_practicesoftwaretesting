import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import 'dotenv/config';

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.mainLink();
  });

  test('Log in with valid data', async({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.login(EMAIL, PASSWORD);
    await expect(loginPage.myAccount).toBeVisible();
  });
});