import { Locator, Page } from '@playwright/test';

export class HomeGherkinCase2Page {
  readonly page: Page;
  readonly registerLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerLink = page.locator('[data-testid="register-link"]');
  }

  async goToLoginPage() {
    await this.page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  }

  async goToRegistrationPage() {
    await this.registerLink.click();
  }

  async goToUrl(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
}
