import { expect, test } from '../../fixtures/mocked/login-page-fixture';

test.describe(
  'login page tests',
  {
    annotation: { type: 'category', description: 'UI tests with mocks' },
  },
  () => {
    test('submit empty form', async ({ loginPage }) => {
      await loginPage.login('', '');
    });

    test('redirected to home page after success', async ({
      loginPage,
      successfulLoginResponse,
      baseURL,
    }) => {
      await loginPage.login('aaa@aa.pl', 'aaa');
      await loginPage.waitForPageToLoad();
      expect(await loginPage.getPageUrl()).toEqual(baseURL);
    });
  },
);
