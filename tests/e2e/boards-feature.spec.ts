import { expect, test } from '../fixtures/pages-fixture';

test.describe(
  'boards functionalities',
  {
    annotation: { type: 'category', description: 'E2E tests' },
  },
  () => {
    test.beforeEach(async ({ loginPage }) => {
      await loginPage.goToUrl('/');
    });

    test('create board', { tag: ['@e2e', '@smoke'] }, async ({ boardPage, homePage }) => {
      await homePage.createNewBoard('new board');
      await expect(boardPage.boardTitle).toHaveValue('new board');
    });

    test('create new list', { tag: ['@e2e'] }, async ({ boardPage, homePage }) => {
      // Arrange
      await homePage.createNewBoard('New Board');
      await boardPage.waitForPageToLoad();

      // Act
      await boardPage.createNewList('New List');

      // Assert
      await expect(boardPage.listTitle).toHaveValue('New List');
    });

    test('create new task2', { tag: ['@e2e'] }, async ({ homePage, boardPage }) => {
      // Arrange
      await homePage.createNewBoard('New Board');
      await boardPage.addList('New List');

      // Act
      await boardPage.createNewTaskInList('New Task', 0);

      // Assert
      await expect(boardPage.taskTitle).toHaveText('New Task');
    });

    test(
      'Reorder lists and tasks within a board',
      { tag: ['@e2e'] },
      async ({ boardPage, homePage }) => {
        // Arrange
        await homePage.createNewBoard('New Board');
        await boardPage.addList('List 1');
        await boardPage.addList('List 2');
        await boardPage.createNewTaskInList('Task 1', 0);
        await boardPage.createNewTaskInList('Task 2', 0);

        // Act
        await boardPage.reorderLists();
        await boardPage.reorderTasksInList;

        // Assert
        // await expect(boardPage.listTitle.nth(0)).toHaveValue('List 2');
        // await expect(boardPage.taskTitlesInList('List 1')).toHaveText(['Task 2', 'Task 1']);

        // await expect(itemsOrder.nth(0)).toHaveAttribute('data-testid', 'item-2');
        // await expect(itemsOrder.nth(1)).toHaveAttribute('data-testid', 'item-1');
      },
    );

    test('update task title', { tag: ['@e2e'] }, async ({ boardPage, homePage, page }) => {
      // Arrange
      await homePage.createNewBoard('New Board');
      await boardPage.addList('List 1');
      await boardPage.createNewTaskInList('Task 1', 0);

      // Act
      await boardPage.editTask('New Task Update');
      await boardPage.clickAway();

      // Assert
      await expect(boardPage.taskTitlePopup).toHaveValue('New Task Update');
    });
  },
);
///test
