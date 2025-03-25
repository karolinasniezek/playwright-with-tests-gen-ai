import { HomePage } from '../../pages/home-page';
import { BoardPage } from '../../pages/board-page';
import { LoginPage } from '../../pages/login-page';
import { test as base } from '@playwright/test';

type PagesFixture = {
  loginPage: LoginPage;
  homePage: HomePage;
  boardPage: BoardPage;
};

let test = base.extend<PagesFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  boardPage: async ({ page }, use) => {
    await use(new BoardPage(page));
  },
});

export { test };
export { expect } from '@playwright/test';
