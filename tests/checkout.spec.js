import { test, expect } from '../fixture.js';
import { CheckoutPage } from '../pages/checkout.page.js';
import { HomePage } from '../pages/home.page.js';
import { paymentMethod } from '../test-data/paymentMethods.js';
import { productName } from '../test-data/productsName.js';
import { addressData } from '../test-data/adressData.js';


test.describe('Purchase Flow', () => {
  test.beforeEach(async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.mainLink();
  });

  test('Logged-in user completes a purchase', async ({ authPage }) => {
    const page = authPage;
    const checkoutPage = new CheckoutPage(page);
    const homePage = new HomePage(page);

    const product = productName.pliers;
    await homePage.addProductToCart(product);
    await checkoutPage.checkout(paymentMethod.cash, addressData);
    await expect(checkoutPage.paymentSuccessMsg).toBeVisible();
  });
});
