export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async mainLink() {
    await this.page.goto('/');
    console.log('URL:', this.page.url());
    console.log('Title:', await this.page.title());
    console.log('Body:', await this.page.locator('body').textContent());
  }
}
