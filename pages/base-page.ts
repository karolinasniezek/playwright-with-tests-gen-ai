import { Page } from '@playwright/test';
import { Navbar } from './modules/navbar';

export class BasePage {
  
  readonly page: Page;
  navbar: Navbar;

  constructor(page: Page) {
    this.page = page;
    this.navbar = new Navbar(page);
  }

  async getPageUrl() {
    return this.page.url();
  }

  async goToUrl(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async waitForPageToLoad() {
    await this.page.waitForLoadState('networkidle');
  }
}
