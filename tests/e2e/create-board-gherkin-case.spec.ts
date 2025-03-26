import { expect, test } from '../fixtures/pages-fixture';

test.describe(
  'project board tests',
  {
    annotation: { type: 'category', description: 'E2E tests' },
  },
  () => {
    test.beforeEach(async ({ loginPage, homePage }) => {
      await loginPage.goToUrl('/');
    });

    test('verify user can create a new project board', async ({ homePage, boardPage }) => {
      // Arrange
      const newBoardName = 'New Project Board';

      // Act
      await homePage.createNewBoard(newBoardName);

      // Assert
      await expect(boardPage.boardTitle).toHaveValue(newBoardName);
    });
  },
);
