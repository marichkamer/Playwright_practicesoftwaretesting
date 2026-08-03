import {test, expect} from '../fixtures/fixture.js';
import { HomePage } from '../pages/home.page.js';
import { languages } from '../test-data/languages.js';
import { productName } from '../test-data/productsName.js';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.mainLink();
  });

  test('004-[HOME-01] Possibility of language change @public', async ({ page }) => {
    const homePage = new HomePage(page);
    const lang = 'es';
    await homePage.changeLanguage(lang);
    await expect(homePage.contactButton).toHaveText(languages[lang].expectedText);

  });

  test('005-[HOME-02] Search for an exact product name @public', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchData = productName.sledgehammer;
    await homePage.searchExactProduct(searchData);
    await expect(page.locator('body')).toContainText(searchData);
  });

  test('006-[HOME-03] Add a product to favorites @auth', async ({authPage}) => {
    const page = authPage;
    const homePage = new HomePage(page);
    const product = productName.pliers;
    await homePage.openProduct(product);
    await homePage.addtoFavorites();
    await homePage.clickOnyourNameAccount();
    await homePage.openMyFavorites();
    await expect(page.locator('body')).toContainText(product);
  });

});