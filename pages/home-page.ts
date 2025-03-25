import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {

  readonly createBoardButton: Locator;
  readonly existingBoardButton: Locator;
  readonly boardCreateButton: Locator;
  readonly boardNameInput: Locator;

  constructor(page: Page) {
    super(page);
    this.createBoardButton = page.getByTestId('create-board');
    this.boardCreateButton = page.getByTestId('new-board-create');
    this.boardNameInput = page.getByTestId('new-board-input');
    this.boardNameInput = page.getByTestId('new-board-input');
  }

  async getBoardWithNameTile(boardName: string): Promise<Locator> {
    return this.page.locator(`//h1[contains(text(),"${boardName}")]/..`);
  }

  async createNewBoard(boardName: string) {
    await this.page.waitForTimeout(3000);
    await this.createBoardButton.click();
    await this.boardNameInput.fill(boardName);
    await this.boardCreateButton.click();
  }
}
