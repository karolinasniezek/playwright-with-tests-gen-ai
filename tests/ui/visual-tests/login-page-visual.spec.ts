import { expect, test } from '../../fixtures/mocked/home-page-fixture';

test.use({ storageState: { cookies: [], origins: [] } });
test.describe(
  'login page visual tests',
  {
    annotation: { type: 'category', description: 'visual tests' },
  },
  () => {
    test.beforeEach(async ({ loginPage }) => {
      await loginPage.goToUrl('/');
    });
    test('empty form visual', {tag: ['@visual','@login']}, async ({ loginPage, homePage }) => {
      await homePage.navbar.clickOnSignIn();
      const screenshot = await loginPage.page.screenshot();
      expect(screenshot).toMatchSnapshot('empty-login.png', { threshold: 1 });
    }); 
  },
);
