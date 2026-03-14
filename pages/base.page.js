export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async mainLink() {
    await this.page.goto('/');
  }
}