import { expect, test } from '../../fixtures/mocked/login-page-fixture';

test.describe(
  'login page visual tests',
  {
    annotation: { type: 'category', description: 'visual tests' },
  },
  () => {
    test('empty form', async ({ loginPage }) => {
      const screenshot = await loginPage.page.screenshot();
      expect(screenshot).toMatchSnapshot('empty-login-form-page.png', { threshold: 1 });
    });

    test('validation errors', async ({ loginPage, errorLoginResponse }) => {
      await loginPage.login(' ', ' ');
      const screenshot = await loginPage.page.screenshot();
      expect(screenshot).toMatchSnapshot(
        'validation-errors-on-login-page.png',
      );
    });
  },
);
