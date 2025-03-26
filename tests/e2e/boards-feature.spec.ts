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
  },
);
///test
