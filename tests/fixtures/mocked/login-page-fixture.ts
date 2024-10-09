import { test as base } from '@playwright/test';
import { LoginPage } from '../../../pages/login-page';
import {
  SuccessfulLoginResponse,
} from '../../../data-models/successful-login';
import { ErrorResponse, ErrorResponseBuilder } from '../../../data-models/error-response';
import { MocksFactory } from '../../../mocks/mocks-factory';

type LoginPageFixture = {
  loginPage: LoginPage;
  successfulLoginResponse: SuccessfulLoginResponse;
  errorLoginResponse: ErrorResponse;
};

export const test = base.extend<LoginPageFixture>({
  loginPage: async ({ page }, use) => {
    await page.goto('/login', { waitUntil: 'domcontentloaded' });
    await use(new LoginPage(page));
  },
  errorLoginResponse: async ({ page }, use) => {
    let loginResponse = new ErrorResponseBuilder().withLoginError().build();
    let mocksFactory = new MocksFactory(page);
    await mocksFactory.mockInvalidLogin(loginResponse);
    await use(loginResponse);
  },
});

export { expect } from '@playwright/test';
