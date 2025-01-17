import errorMessages from '../../consts/errorMessages';
import { expect, test } from '../fixtures/pages-fixture';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe(
  'login page tests',
  {
    annotation: { type: 'category', description: 'E2E tests' },
  },
  () => {
    test.beforeEach(async ({ loginPage }) => {
      await loginPage.goToUrl('/');
    });

    test('create user - no pass', {tag: ['@e2e','@login'],}, async ({ loginPage, homePage }) => {
      await homePage.navbar.clickOnSignIn();
      await loginPage.createUser('theuser@yahoo.com', '');
      await expect(loginPage.registerErrorBox).toHaveText(errorMessages.emailPasswordRequired);
    });
  },
);