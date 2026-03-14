 import { BasePage } from "./base.page";

 
 export class RegistrationPage extends BasePage{
   constructor(page) {
     super(page)
      this.signInBtn = page.locator('[data-test="nav-sign-in"]');
      this.registerBtn = page.locator('[data-test="register-link"]');
      this.firstNameField = page.locator('[data-test="first-name"]');
      this.lastNameField = page.locator('[data-test="last-name"]');
      this.dateBirthField = page.locator('[data-test="dob"]');
      this.streetField = page.locator('[data-test="street"]');
      this.postalCodeField = page.locator('[data-test="postal_code"]');
      this.cityField = page.locator('[data-test="city"]');
      this.stateField = page.locator('[data-test="state"]');
      this.countryFiled = page.locator('[data-test="country"]');
      this.phoneField = page.locator('[data-test="phone"]');
      this.emailRegField = page.locator('[data-test="email"]');
      this.passwordRegField = page.locator('[data-test="password"]');
      this.regSubmitBtn = page.locator('[data-test="register-submit"]')
   }
 
    async register(user){
      await this.signInBtn.click(); 
      await this.registerBtn.click();
      await this.firstNameField.fill(user.firstName);
      await this.lastNameField.fill(user.lastName);
      await this.dateBirthField.fill(user.dateBirth);
      await this.streetField.fill(user.street);
      await this.postalCodeField.fill(user.postalCode);
      await this.cityField.fill(user.city);
      await this.stateField.fill(user.state);
      await this.countryFiled.selectOption(user.country);
      await this.phoneField.fill(user.phone);
      await this.emailRegField.fill(user.email);
      await this.passwordRegField.fill(user.password);
      await this.regSubmitBtn.click();
      await this.page.waitForLoadState('networkidle');
    }
}