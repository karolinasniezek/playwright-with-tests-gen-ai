import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly createBoardButton: Locator;
  readonly existingBoardButton: Locator;
  readonly boardCreateButton: Locator;
  readonly boardNameInput: Locator;
  readonly boardsContainer: Locator;
  readonly loggedInUser: Locator;
  readonly logoutButton: Locator;

  readonly newBoard: Locator;
  readonly newBoardInput: Locator;
  readonly newBoardCreateButton: Locator;

  constructor(page: Page) {
    super(page);
    this.createBoardButton = page.getByTestId('create-board');
    this.boardCreateButton = page.getByTestId('new-board-create');
    this.boardNameInput = page.getByTestId('new-board-input');
    this.boardNameInput = page.getByTestId('new-board-input');
    this.boardsContainer = page.locator('[data-testid="main-container"]');
    this.loggedInUser = page.locator('[data-testid="logged-user"]');
    this.logoutButton = page.locator('[data-testid="login-menu"]');

    this.newBoard = page.locator('#new-board');
    this.newBoardInput = page.getByTestId('new-board-input');
    this.newBoardCreateButton = page.getByTestId('new-board-create');
  }

  async goToHomePage() {
    await this.page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  }

  async getBoardWithNameTile(boardName: string): Promise<Locator> {
    return this.page.locator(`//h1[contains(text(),"${boardName}")]/..`);
  }

  // async createNewBoard(boardName: string) {
  //   await this.page.waitForTimeout(3000);
  //   await this.createBoardButton.click();
  //   await this.boardNameInput.fill(boardName);
  //   await this.boardCreateButton.click();
  // }

  async logout() {
    await this.page.getByTestId('logged-user').click();
    await this.page.getByText('Log out').click();
  }

  async createNewBoard(boardName: string) {
    await this.newBoard.click();
    await this.newBoardInput.fill(boardName);
    await this.newBoardCreateButton.click();
  }
}
