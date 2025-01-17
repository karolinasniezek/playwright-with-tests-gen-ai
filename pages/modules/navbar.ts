import { Locator, Page } from '@playwright/test';

export class Navbar {

  readonly signInLink: Locator;

  constructor(page: Page) {
    this.signInLink = page.getByTestId('login-menu');
  }

  async clickOnSignIn() {
    this.signInLink.click();
  }
}
