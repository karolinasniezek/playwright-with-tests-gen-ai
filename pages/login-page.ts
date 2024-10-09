import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('input[placeholder="Email"]');
  }

  async login(email: string, pass: string) {
    await this.emailInput.fill(email);
  }
}
