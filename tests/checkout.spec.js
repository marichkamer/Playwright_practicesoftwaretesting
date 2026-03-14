import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { CheckoutPage } from '../pages/checkout.page.js';
import { HomePage } from '../pages/home.page.js';
import { paymentMethod } from '../test-data/paymentMethods.js';
import { productName } from '../test-data/productsName.js';
import { addressData } from '../test-data/adressData.js';
import 'dotenv/config';

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

test.describe('Purchase Flow', () => {
  test.beforeEach(async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.mainLink();
  });

    test('Logged-in user completes a purchase', async({page}) => {
      const loginPage = new LoginPage(page);
      const checkoutPage = new CheckoutPage(page);
      const homePage = new HomePage(page);
      await loginPage.login(EMAIL, PASSWORD);
      const product = productName.pliers;
      await homePage.addProductToCart(product);
      await checkoutPage.checkout(paymentMethod.cash, addressData);
      await expect(checkoutPage.paymentSuccessMsg).toBeVisible();
    });
});