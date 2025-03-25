import { expect, test } from '../fixtures/pages-fixture';

test.describe(
  'failedlogin page tests',
  { annotation: { type: 'category', description: 'E2E tests' } },
  () => {
    test.beforeEach(async ({ homePage }) => {
      await homePage.goToHomePage();
    });

    test(
      'verify invalid login error messages',
      { tag: ['@e2e', '@login'] },
      async ({ loginPage, homePage }) => {
        await homePage.navbar.clickOnSignIn();
        await loginPage.login('', '');
        await expect(loginPage.registerErrorBox).toHaveText('Email and password are required');
      },
    );
  },
);
