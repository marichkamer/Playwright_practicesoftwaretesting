import { BasePage } from './base.page';
export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    this.mainCartBtn = page.locator('[data-test="nav-cart"]');
    this.proceedtoCheckoutStep1 = page.locator('[data-test="proceed-1"]');
    this.proceedtoCheckoutStep2 = page.locator('[data-test="proceed-2"]');
    this.proceedtoCheckoutStep3 = page.locator('[data-test="proceed-3"]');
    this.paymentMethod = page.locator('[data-test="payment-method"]');
    this.confirmBtn = page.locator('[data-test="finish"]');
    this.paymentSuccessMsg = page.locator('[data-test="payment-success-message"]');
    this.productNames = page.locator('[data-test="product-name"]');
    this.streetInput = page.locator('[data-test="street"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.countryInput = page.locator('[data-test="country"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.houseNumberInput = page.locator('[data-test="house_number"]');
  }

  async checkout(method, addressData) {
    await this.proceedtoCheckoutStep1.click();
    await this.proceedtoCheckoutStep2.click();
    await this.fillAddress(addressData);
    await this.proceedtoCheckoutStep3.click();
    await this.selectPaymentMethod(method);
    await this.confirmBtn.click();
  }

  async selectPaymentMethod(method) {
    await this.paymentMethod.selectOption(method);
  }

  async fillAddress(data) {
    await this.countryInput.selectOption(data.country);
    await this.postalCodeInput.fill(data.postalCode);
    await this.houseNumberInput.fill(data.houseNumber);
  }
}
