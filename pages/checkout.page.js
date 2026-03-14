import { BasePage } from "./base.page";
export class CheckoutPage extends BasePage{
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
  }

  
    async checkout(method, addressData){
      await this.proceedtoCheckoutStep1.click();
      await this.proceedtoCheckoutStep2.click();
      await this.fillAddressIfNeeded(addressData);
      await this.proceedtoCheckoutStep3.click();
      await this.selectPaymentMethod(method);
      await this.confirmBtn.click();
    }

    async selectPaymentMethod(method) {
      await this.paymentMethod.selectOption(method);
    } 

    async fillAddressIfNeeded(data) {
        if (await this.streetInput.inputValue() === "") {
          await this.streetInput.fill(data.street);
        }

        if (await this.cityInput.inputValue() === "") {
          await this.cityInput.fill(data.city);
        }

        if (await this.stateInput.inputValue() === "") {
          await this.stateInput.fill(data.state);
        }

        if (await this.countryInput.inputValue() === "") {
          await this.countryInput.fill(data.country);
        }

        if (await this.postalCodeInput.inputValue() === "") {
          await this.postalCodeInput.fill(data.postalCode);
        }
    }   
} 