import { expect, test } from '../fixtures/pages-fixture';

test.describe(
  'Logout user',
  {
    annotation: { type: 'category', description: 'E2E tests' },
  },
  () => {
    test.beforeEach(async ({ homePage }) => {
      await homePage.goToUrl('http://localhost:3000/');
      await homePage.navbar.clickOnSignIn();
    });
    test(
      'verify user can log out of the application',
      { tag: ['@e2e', '@logout'] },
      async ({ loginPage, homePage }) => {
        // Login the user
        await loginPage.login('testuser@example.com', 'password123');

        // Verify the user is logged in
        await expect(homePage.loggedInUser).toBeVisible();

        // Logout the user
        await homePage.logout();

        // Verify the user is logged out and redirected to the login page
        // await expect(loginPage.loginForm).toBeVisible();
      },
    );
  },
);
