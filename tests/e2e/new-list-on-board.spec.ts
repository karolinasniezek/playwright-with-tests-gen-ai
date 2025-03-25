import { expect, test } from '../fixtures/pages-fixture';

test.describe(
  'new list on board tests',
  { annotation: { type: 'category', description: 'E2E tests' } },
  () => {
    test.beforeEach(async ({ loginPage, homePage }) => {
      await homePage.goToHomePage();
    });

    test('create new list', { tag: ['@e2e'] }, async ({ homePage, boardPage }) => {
      await homePage.createNewBoard('New Board');
      await expect(boardPage.boardTitle).toHaveValue('New Board');

      await boardPage.addList('New List1');
      await expect(boardPage.listTitle).toBeVisible();
      await expect(boardPage.listTitle).toHaveValue('New List1');
    });

    test('create new task in list', { tag: ['@e2e'] }, async ({ homePage, boardPage }) => {
      // Create a new board
      await homePage.createNewBoard('New Board');

      // Create a new list
      await boardPage.addList('New List1');
      await expect(boardPage.listTitle).toBeVisible();

      // Create a new task within the new list
      await boardPage.createNewTaskInList('New Task');
      // await expect(boardPage.getTaskByTitle('New Task')).toBeVisible();
    });
  },
);
