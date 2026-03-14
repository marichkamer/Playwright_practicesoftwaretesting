import { BasePage } from "./base.page";

export class LoginPage extends BasePage{
  constructor(page) {
    super(page);
      this.signInBtn = page.locator('[data-test="nav-sign-in"]');
      this.emailField = page.locator('[data-test="email"]');
      this.passwordField = page.locator('[data-test="password"]');
      this.loginBtn = page.locator('[data-test="login-submit"]');
      this.forgotPassword = page.locator('[data-test="forgot-password-link"]');
      this.myAccount = page.locator('[data-test="page-title"]');
  }
 
  async login(email, password) {
   await this.signInBtn.click();     
   await this.emailField.fill(email);
   await this.passwordField.fill(password);
   await this.loginBtn.click(); 
   await this.page.waitForLoadState('networkidle');
  }

}