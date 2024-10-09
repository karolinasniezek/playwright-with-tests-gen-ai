import { ArticlePage } from '../../pages/article-page';
import { HomePage } from '../../pages/home-page';
import { LoginPage } from '../../pages/login-page';
import { test as base } from '@playwright/test';

type PagesFixture = {
  loginPage: LoginPage;
  homePage: HomePage;
  articlePage: ArticlePage;
};

export const test = base.extend<PagesFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  articlePage: async ({ page }, use) => {
    await use(new ArticlePage(page));
  },
});

export { expect } from '@playwright/test';
