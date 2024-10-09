import { Locator, Page } from '@playwright/test';

export class Navbar {

  readonly signInLink: Locator;

  constructor(page: Page) {
    this.signInLink = page.locator('a[href="/login"]');
  }

  async clickOnSignIn() {
    this.signInLink.click();
  }
}
