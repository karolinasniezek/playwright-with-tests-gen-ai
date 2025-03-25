import { expect, test } from '../fixtures/pages-fixture';

test.describe(
  'board tests',
  {
    annotation: { type: 'category', description: 'E2E tests' },
  },
  () => {
    test.beforeEach(async ({ homePage, boardPage }) => {
      await homePage.goToHomePage();
      // await homePage.createNewBoard('New Board1');
      // await boardPage.clickMyBoardsButton();
    });

    test('user can mark a board as starred', async ({ boardPage, homePage, page }) => {
      await homePage.createNewBoard('New111');
      await boardPage.clickMyBoardsButton();
      await await expect(page).toHaveURL('http://localhost:3000/');
      // Arrange
      const boardName = 'New New111';

      // // // Act
      // await boardPage.hoverBoardByTitle(boardName);

      // // Assert
      // await expect(boardPage.isStarredBoard(boardName)).toBeTruthy();
    });
  },
);
