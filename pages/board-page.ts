import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class BoardPage extends BasePage {

  readonly boardTitle: Locator;
  readonly taskList: Locator;
  readonly listTitle: Locator;
  readonly taskTitlePopup: Locator;
  readonly dropdowMenuOnPopup;
  readonly closePopup;

  constructor(page: Page) {
    super(page);
    this.boardTitle = page.getByTestId('board-title');
    this.taskList = page.getByTestId('tasks-list');
    this.listTitle = page.getByTestId('list-name');
    this.taskTitlePopup = page.getByTestId('task-module-name');
    this.dropdowMenuOnPopup = page.getByTestId('task-module-close');
    this.closePopup = page.getByText('Close task');
  }
  
  async renameBoard(boardName: string){
    await this.boardTitle.fill(boardName);
    await this.boardTitle.press('Enter');
  }
}
