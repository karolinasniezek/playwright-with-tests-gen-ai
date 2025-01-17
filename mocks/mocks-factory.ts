import { Page } from '@playwright/test';
import { ErrorResponse } from '../data-models/error-response';
import Routes from './routes';
import { Boards } from '../data-models/boards';
import { Board } from '../data-models/board';
import { List } from '../data-models/list';
import { HttpMethod } from '../utilities/httpMethodsEnum';

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
        body: JSON.stringify(response.error),
      });
    });
  }

  async mockValidLogin() {
    await this.page.route(Routes.Login, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
      });
    });
  }

  async mockBoard(boards: Boards) {
    await this.page.route(Routes.Boards, async (route) => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify(boards),
      });
    });
  }

  async mockPatchBoard(boards: Boards) {
    await this.page.route(Routes.Board, async (route) => {
      if (route.request().method() === HttpMethod.PATCH) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(boards),
        });
      } else {
        route.continue();
      }
    });
  }

  async mockBoardWithId(board: Board) {
    await this.page.route(Routes.Board, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(board),
      });
    });
  }

  async mockPatchListWithId(list: List) {
    await this.page.route(Routes.Lists, async (route) => {
      if (route.request().method() === HttpMethod.PATCH) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(list),
        });
      } else {
        route.continue();
      }
    });
  }

  async mockPatchTaskWithId(list: List) {
    await this.page.route(Routes.Tasks, async (route) => {
      if (route.request().method() === HttpMethod.PATCH) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(list),
        });
      } else {
        route.continue();
      }
    });
  }
}
