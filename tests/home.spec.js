import {test, expect} from '../fixture.js';
import { HomePage } from '../pages/home.page.js';
import { languages } from '../test-data/languages.js';
import { productName } from '../test-data/productsName.js';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.mainLink();
  });

  test('Possibility of language change', async ({ page }) => {
    const homePage = new HomePage(page);
    const lang = 'es';
    await homePage.changeLanguage(lang);
    await expect(page.locator('body')).toContainText(languages[lang].expectedText);
  });

  test('Search for an exact product name', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchData = productName.sledgehammer;
    await homePage.searchExactProduct(searchData);
    await expect(page.locator('body')).toContainText(searchData);
  });

  test('Add a product to favorites', async ({authPage}) => {
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