import { Locator, Page } from '@playwright/test';

export class RegistrationGherkinCase2Modal {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerButton: Locator;
  readonly registrationSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-testid="signup-email"]');
    this.passwordInput = page.locator('[data-testid="signup-password"]');
    this.registerButton = page.locator('[data-testid="signup"]');
    this.registrationSuccessMessage = page.locator('[data-testid="registration-success"]');
  }

  async registerNewUser() {
    await this.emailInput.fill('newuser@example.com');
    await this.passwordInput.fill('NewPassword123!');
    await this.registerButton.click();
  }
}
