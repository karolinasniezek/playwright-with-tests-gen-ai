import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../../../pages/login-page';
import { SuccessfulLoginResponse } from '../../../data-models/successful-login';
import { ErrorResponse, ErrorResponseBuilder } from '../../../data-models/error-response';
import { MocksFactory } from '../../../mocks/mocks-factory';
import { HomePage } from '../../../pages/home-page';
import { BoardPage } from '../../../pages/board-page';
import { BoardBuilder, Boards } from '../../../data-models/boards';
import { Board, BoardWIthIdBuilder } from '../../../data-models/board';

type HomePageFixture = {
  loginPage: LoginPage;
  homePage: HomePage;
  boardPage: BoardPage;
  successfulLoginResponse: SuccessfulLoginResponse;
  errorNoLoginDataResponse: ErrorResponse;
  boardsResponse: Boards;
  boardWithIdResponse: Board;
};

 let test = base.extend<HomePageFixture>({
  loginPage: async ({ page }, use) => {
    await page.goto('/login', { waitUntil: 'domcontentloaded' });
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  boardPage: async ({ page }, use) => {
    await use(new BoardPage(page));
  },

  boardsResponse: async ({ page }, use) => {
    let boardsResponse = new BoardBuilder().withStaticData().build();
    await new MocksFactory(page).mockBoard(boardsResponse);
    await use(boardsResponse);
  },

  boardWithIdResponse: async ({ page }, use) => {
    let boardResponse = new BoardWIthIdBuilder().withStaticData().build();
    await new MocksFactory(page).mockBoardWithId(boardResponse);
    await use(boardResponse);
  },

  errorNoLoginDataResponse: async ({ page }, use) => {
    await mockInvalidLogin(page, new ErrorResponseBuilder().withNoLoginDataError().build(), use);
  },

});

export { test };

async function mockInvalidLogin(page: Page, loginResponse: ErrorResponse, use) {
  let mocksFactory = new MocksFactory(page);
  await mocksFactory.mockInvalidLogin(loginResponse);
  await use(loginResponse);
}

export { expect } from '@playwright/test';
