import { BasePage } from './base.page';
export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.languageBtn = page.locator('[data-test="language-select"]');
    this.searchBtn = page.locator('[data-test="search-query"]');
    this.searchBtnSubmit = page.locator('[data-test="search-submit"]');
    this.addtoCartBtn = page.locator('[data-test="add-to-cart"]');
    this.homeBtn = page.locator('[data-test="nav-home"]');
    this.mainCartBtn = page.locator('[data-test="nav-cart"]');
    this.productNames = page.locator('[data-test="product-name"]');
    this.cartQuantity = page.locator('[data-test="cart-quantity"]');
    this.removeFromCartBtn = page.locator('.btn.btn-danger');
    this.emptyCartMessage = page.getByText('The cart is empty. Nothing to');
    this.favoritesBtn = page.locator('[data-test="add-to-favorites"]');
    this.signedInUserName = page.locator('[data-test="nav-menu"]');
    this.myFavorites = page.locator('[data-test="nav-my-favorites"]');


  }

  
  async goHome() {
    await this.homeBtn.click();
  }

  async openCart() {
    await this.mainCartBtn.click();
  }

  async openProduct(productName) {
    await this.homeBtn.click();
    const product = this.productNames.filter({
      has: this.page.locator(`text="${productName}"`),
    });
    await product.click();
  }

  async addToCart() {
    await this.addtoCartBtn.click();
  }

  async addProductToCart(prodName) {
    await this.openProduct(prodName);
    await this.addToCart();
    await this.openCart();
  }

  async changeLanguage(langCode) {
    await this.languageBtn.click();
    await this.page.locator(`[data-test="lang-${langCode}"]`).click();
  }

  async searchExactProduct(productName) {
    await this.searchBtn.click();
    await this.searchBtn.fill(productName);
    await this.searchBtnSubmit.click();
  }

  async removeFromCart() {
    await this.removeFromCartBtn.click();
  }

  async addtoFavorites() {
    await this.favoritesBtn.click();
  }

  async clickOnyourNameAccount() {
    await this.signedInUserName.click();
  }

  async openMyFavorites() {
    await this.myFavorites.click();
  }
}
