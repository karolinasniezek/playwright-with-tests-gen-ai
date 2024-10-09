import { expect, test } from '../../fixtures/mocked/article-page-fixture';

test.describe(
  'article page tests',
  {
    annotation: { type: 'category', description: 'UI tests with mocks' },
  },
  () => {
    test('article title is displayed', async ({ articlePage, notFollowedArticleMock }) => {
      await expect(articlePage.title).toHaveText(notFollowedArticleMock.article.title);
    });
  },
);
