import { expect, test } from '../fixtures/pages-fixture';

test.describe(
  'login page tests',
  {
    annotation: { type: 'category', description: 'E2E tests' },
  },
  () => {
    test.beforeEach(async ({ loginPage }) => {
      await loginPage.goToUrl('/');
    });

    // test skipped as used credentials are not valid
    test('login with valid user', async ({ loginPage, homePage }) => {
      await homePage.navbar.clickOnSignIn();
      await loginPage.login('theuser@yahoo.com', 'pass');
      expect(homePage.feedTabs.first()).toHaveText('Your feed');
    });
  },
);
