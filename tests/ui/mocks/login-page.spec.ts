import errorMessages from '../../../consts/errorMessages';
import { expect, test } from '../../fixtures/mocked/home-page-fixture';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe(
  'login page tests with mocks',
  {
    annotation: { type: 'category', description: 'UI tests with mocks' },
  },
  () => {
    test('submit empty form', { tag: ['@mocked'] }, async ({ loginPage,homePage, errorNoLoginDataResponse }) => {
      await homePage.navbar.clickOnSignIn();
      await loginPage.login('', '');
      await expect(loginPage.registerErrorBox).toHaveText(errorMessages.emailPasswordRequired);
    });
  },
);
