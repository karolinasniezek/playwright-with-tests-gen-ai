import { expect, test } from '../../fixtures/mocked/home-page-fixture';

test.describe(
  'boards features visual tests',
  {
    annotation: { type: 'category', description: 'UI tests with mocks' },
  },
  () => {
    test.beforeEach(async ({ loginPage }) => {
      await loginPage.goToUrl('/');
    });

    test('create board', { tag: ['@visual'] }, async ({ boardPage, homePage, boardsResponse, boardWithIdResponse }) => {
      await homePage.createNewBoard('new visual board');
      const screenshot = await boardPage.page.screenshot();
      expect(screenshot).toMatchSnapshot('create-board.png', { threshold: 1 });
    });
  },
);
