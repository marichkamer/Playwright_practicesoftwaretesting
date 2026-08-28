import {test, expect} from "../fixtures/login.fixture.js"
import { productName } from '../test-data/productsName.js';

test.describe('Basket Functionality', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.mainLink();
    });

    test('001-[BASKET-01] User can add a product to the basket @public', async ({ homePage }) => {
        await homePage.addProductToCart(productName.hammer);
        await expect(homePage.cartQuantity).toHaveText('1');
    });

    test ('002-[BASKET-02] User can remove a product from the basket @public', async ({ homePage }) => {
        await homePage.addProductToCart(productName.boltCutters);
        await homePage.openCart();
        await homePage.removeFromCart();
        await expect(homePage.emptyCartMessage).toBeVisible();    
    });
});