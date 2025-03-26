import { Locator, Page, expect } from '@playwright/test';

export class AiLoginPage {
  readonly page: Page;
  readonly emailLoginInput: Locator;
  readonly loginButton: Locator;
  readonly passwordLoginInput: Locator;
  readonly logSignUpSwitcher: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailLoginInput = page.getByTestId('login-email');
    this.loginButton = page.getByTestId('login');
    this.passwordLoginInput = page.getByTestId('login-password');
    this.logSignUpSwitcher = page.getByTestId('LoginModule_logSignSwitch');
  }
  async login(email: string, password: string) {
    await this.emailLoginInput.fill(email);
    await this.passwordLoginInput.fill(password);
    await this.loginButton.click();
  }

  get loggedUser(): Locator {
    return this.page.getByTestId('logged-user');
  }

  async clickLogSignUpSwitcher() {
    await this.logSignUpSwitcher.locator('a').click();
  }
}
