import { test, expect } from "../fixtures/auth.fixture.js"
import { paymentMethod } from '../test-data/paymentMethods.js';
import { productName } from '../test-data/productsName.js';
import { addressData } from '../test-data/adressData.js';

test.describe('Purchase Flow', () => {
  test.beforeEach(async ({ checkoutPage}) => {
    await checkoutPage.mainLink();
  });

  test('003-[CHECKOUT-01] Logged-in user completes a purchase @auth', async ({ checkoutPage, homePage, authenticationPage}) => {
    await authenticationPage;
    const product = productName.pliers;
    await homePage.addProductToCart(product);
    await checkoutPage.checkout(paymentMethod.cash, addressData);
    await expect(checkoutPage.paymentSuccessMsg).toBeVisible();
  });
});
