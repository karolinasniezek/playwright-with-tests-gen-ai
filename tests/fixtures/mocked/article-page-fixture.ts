import { Page, test as base } from '@playwright/test';
import { ArticlePage } from '../../../pages/article-page';
import { ArticleResponse, ArticleResponseBuilder } from '../../../data-models/article-response';
import { MocksFactory } from '../../../mocks/mocks-factory';
import { CommentsBuilder } from '../../../data-models/comments';

type ArticlePageFixture = {
  articlePage: ArticlePage;
  notFollowedArticleMock: ArticleResponse;
  followedArticleMock: ArticleResponse;
  favoritedArticleMock: ArticleResponse;
  articleWithoutCommentsMock: ArticleResponse;
  articleWithCommentsMock: ArticleResponse;
};

export const test = base.extend<ArticlePageFixture>({
  notFollowedArticleMock: async ({ page }, use) => {
    let articleResponse = mockArticlePage({
      following: false,
      favorited: false,
      hasComments: false,
      page: page,
    });
    await use(await articleResponse);
  },
  articlePage: async ({ page }, use) => {
    await use(new ArticlePage(page));
  },
});

export { expect } from '@playwright/test';

async function mockArticlePage({
  following,
  favorited,
  hasComments,
  page,
}: {
  following: boolean;
  favorited: boolean;
  hasComments: boolean;
  page: Page;
}) {
  let articleResponse = new ArticleResponseBuilder().withStaticData().build();
  articleResponse.article.author.following = following;
  articleResponse.article.favorited = favorited;
  let comments;
  if (hasComments) {
    comments = new CommentsBuilder().withStaticComment().build();
  } else {
    comments = new CommentsBuilder().withNoComments().build();
  }

  let mocksFactory = new MocksFactory(page);
  mocksFactory.mockArticlePage(articleResponse, comments);
  await page.goto('/article/test-article-553', { waitUntil: 'domcontentloaded' });
  return articleResponse;
}
