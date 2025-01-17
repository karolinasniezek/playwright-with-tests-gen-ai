import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly emailLoginInput: Locator;
  readonly emailSignUpInput: Locator;
  readonly passwordLoginInput: Locator;
  readonly passwordSignUpInput: Locator;
  readonly signUpHereLink: Locator;
  readonly signUpButton: Locator;
  readonly loginButton: Locator;
  readonly registerErrorBox: Locator;
  readonly loginErrorBox: Locator;
  readonly loggedUser: Locator;

  constructor(page: Page) {
    super(page);
    this.emailLoginInput = page.getByTestId('login-email');
    this.emailSignUpInput = page.getByTestId('signup-email');
    this.passwordLoginInput = page.getByTestId('login-password');
    this.passwordSignUpInput = page.getByTestId('signup-password');
    this.signUpHereLink = page.getByText('Sign up here');
    this.signUpButton = page.getByTestId('signup');
    this.loginButton = page.getByTestId('login');
    this.registerErrorBox = page.getByTestId('register-error');
    this.loginErrorBox = page.getByTestId('login-error');
    this.loggedUser = page.getByTestId('logged-user');
  }

  async createUser(email: string, pass: string) {
    await this.signUpHereLink.click();
    await this.emailSignUpInput.fill(email);
    await this.passwordSignUpInput.fill(pass);
    await this.signUpButton.click();

  }
  async login(email: string, pass: string) {
    await this.emailLoginInput.fill(email);
    await this.passwordLoginInput.fill(pass);
    await this.loginButton.click();
  }
}
