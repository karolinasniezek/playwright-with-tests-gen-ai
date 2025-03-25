import { expect, test } from '../fixtures/pages-fixture';

test.describe('ai login', () => {
  test(
    'Verify user can log in to the application',
    { tag: ['@e2e', '@login'] },
    async ({ loginGherkinPage, homePage }) => {
      // Arrange
      await loginGherkinPage.goToLoginPage();

      // tego brakowalo kroku
      await homePage.navbar.clickOnSignIn();

      // Act
      await loginGherkinPage.login('testuser@example.com', 'password123');

      // Assert
      await expect(homePage.boardsContainer).toBeVisible();
      await expect(loginGherkinPage.loginDropdown).toContainText('testuser@example.com');
    },
  );
});
