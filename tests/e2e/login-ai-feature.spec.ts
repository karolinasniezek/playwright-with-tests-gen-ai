import { expect, test } from '../fixtures/pages-fixture';

test.describe('ai login', () => {
  test('login user', async ({ loginPage, homePage }) => {
    // Arrange
    await loginPage.goToUrl('/');
    await homePage.navbar.clickOnSignIn();

    // Act
    await loginPage.login('testuser@example.com', 'password123');

    // Assert
    await expect(loginPage.loggedUser).toBeVisible();
  });
});
