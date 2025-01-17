import { expect, test } from '../../fixtures/mocked/home-page-fixture';

test.describe(
  'boards features tests',
  {
    annotation: { type: 'category', description: 'UI tests with mocks' },
  },
  () => {
    test.beforeEach(async ({ loginPage }) => {
      await loginPage.goToUrl('/');
    });

    test('create board', { tag: ['@mocked'] }, async ({ boardPage, homePage, boardsResponse, boardWithIdResponse }) => {
      await homePage.createNewBoard('new mocked board');
      await expect(boardPage.boardTitle).toHaveValue('new mocked board');
    });
  },
);
