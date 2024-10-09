import { Page } from '@playwright/test';
import { Comments } from '../data-models/comments';
import { SuccessfulLoginResponse } from '../data-models/successful-login';
import { ArticleResponse } from '../data-models/article-response';
import { ErrorResponse } from '../data-models/error-response';
import Routes from './routes';

export class MocksFactory {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async mockInvalidLogin(response: ErrorResponse) {
    await this.page.route(Routes.Login, async (route) => {
      await route.fulfill({
        status: 403,
        contentType: 'text/plain',
        body: JSON.stringify(response),
      });
    });
  }

  async mockArticlePage(article: ArticleResponse, comments: Comments) {
    await this.page.route(Routes.Articles, (route) => {
      route.fulfill({
        status: 200,
        contentType: 'text/plain',
        body: JSON.stringify(article),
      });
    });

    await this.page.route(Routes.Comments, (route) => {
      route.fulfill({
        status: 200,
        contentType: 'text/plain',
        body: JSON.stringify(comments),
      });
    });
  }
}
