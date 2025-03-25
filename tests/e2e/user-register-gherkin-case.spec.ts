import { expect, test } from '../fixtures/pages-fixture';

test.describe('ai registration', () => {
  test(
    'Verify user can register a new account',
    { tag: ['@e2e', '@registration'] },
    async ({ homeGherkinCase2Page, registrationGherkinCase2Modal, homePage, loginGherkinPage }) => {
      // Arrange
      await homeGherkinCase2Page.goToLoginPage();

      // brakowalo tego kroku, tak dodalam bez zmian na homeGherkinPage
      await homePage.navbar.clickOnSignIn();

      await expect(loginGherkinPage.emailInput).toBeVisible();

      await loginGherkinPage.clickSignUpSwitchLink();

      // await homeGherkinCase2Page.goToRegistrationPage();
      // // await homeGherkinCase2Page.goToRegistrationPage();

      // // Act
      await registrationGherkinCase2Modal.registerNewUser();

      // // Assert
      // await expect(registrationGherkinCase2Modal.registrationSuccessMessage).toBeVisible();
      // await expect(registrationGherkinCase2Modal.registrationSuccessMessage).toHaveText(
      //   'Account created successfully',
      // );
    },
  );
});
