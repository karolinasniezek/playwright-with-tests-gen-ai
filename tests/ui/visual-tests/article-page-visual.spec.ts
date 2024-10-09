import { expect, test } from '../../fixtures/mocked/article-page-fixture';

test.describe(
  'article page visual tests',
  {
    annotation: { type: 'category', description: 'visual tests' },
  },
  () => {
    test('followed article', async ({ articlePage, followedArticleMock }) => {
      const screenshot = await articlePage.page.screenshot();
      expect(await screenshot).toMatchSnapshot('followed-article-page.png', { threshold: 1 });
    });

    test('not followed article', async ({ articlePage, notFollowedArticleMock }) => {
      const screenshot = await articlePage.page.screenshot();
      expect(await screenshot).toMatchSnapshot('not-followed-article-page.png', { threshold: 1 });
    });

    test('favorited article', async ({ articlePage, favoritedArticleMock }) => {
      const screenshot = await articlePage.page.screenshot();
      expect(await screenshot).toMatchSnapshot('favorited-article-page.png', { threshold: 1 });
    });
  },
);
