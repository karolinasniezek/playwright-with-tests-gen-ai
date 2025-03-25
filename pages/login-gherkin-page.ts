import { Locator, Page, expect } from '@playwright/test';

export class LoginGherkinPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginDropdown: Locator;
  readonly loginSignUpSwitch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-testid="login-email"]');
    this.passwordInput = page.locator('[data-testid="login-password"]');
    this.loginButton = page.locator('[data-testid="login"]');
    this.loginDropdown = page.locator('[data-testid="logged-user"]');
    this.loginSignUpSwitch = page.locator('[data-testid="sign-up-here-link"]');
  }

  async goToLoginPage() {
    await this.page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickSignUpSwitchLink() {
    await this.loginSignUpSwitch.click();
  }
}
