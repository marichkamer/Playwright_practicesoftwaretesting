import {test, expect} from '../fixtures/login.fixture.js';
import { languages } from '../test-data/languages.js';
import { productName } from '../test-data/productsName.js';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.mainLink();
  });

  test('004-[HOME-01] Possibility of language change @auth', async ({ homePage }) => {
    const lang = 'es';
    await homePage.changeLanguage(lang);
    await expect(homePage.sustainabilityHeading(languages[lang].expectedText)).toBeVisible();
  });

  test('005-[HOME-02] Search for an exact product name @public', async ({ page, homePage }) => {
    const searchData = productName.sledgehammer;
    await homePage.searchExactProduct(searchData);
    await expect(page.locator('body')).toContainText(searchData);
  });

  test('006-[HOME-03] Add a product to favorites @auth', async ({authPage, page,homePage}) => {
    await authPage;
    const product = productName.pliers;
    await homePage.openProduct(product);
    await homePage.addtoFavorites();
    await homePage.clickOnyourNameAccount();
    await homePage.openMyFavorites();
    await expect(page.locator('body')).toContainText(product);
  });

});