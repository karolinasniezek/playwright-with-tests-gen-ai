import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class BoardPage extends BasePage {
  readonly boardTitle: Locator;
  readonly taskList: Locator;
  readonly listTitle: Locator;
  readonly list: Locator;
  readonly taskTitlePopup: Locator;
  readonly dropdowMenuOnPopup;
  readonly closePopup;

  readonly starButton: Locator;
  readonly starredBoards: Locator;
  readonly myBoardsButton: Locator;

  readonly addListButton: Locator;
  readonly newListInput: Locator;
  readonly newListCreateButton: Locator;
  readonly addTaskButton: Locator;
  readonly newTaskInput: Locator;
  readonly taskTitle: Locator;
  readonly addNewTaskButton: Locator;
  readonly task: Locator;
  readonly body: Locator;
  readonly taskTitleInputOnModal: Locator;

  constructor(page: Page) {
    super(page);
    this.boardTitle = page.getByTestId('board-title');
    this.taskList = page.getByTestId('tasks-list');
    this.listTitle = page.getByTestId('list-name');
    this.list = page.locator('[data-testid="list"]');
    this.taskTitlePopup = page.getByTestId('task-module-name');
    this.dropdowMenuOnPopup = page.getByTestId('task-module-close');
    this.closePopup = page.getByText('Close task');
    this.starButton = this.page.locator('[data-testid="star"]');
    this.starredBoards = this.page.locator('[data-testid="board-item"]', { hasText: /Starred/ });
    this.myBoardsButton = this.page.locator('[class*="Nav_boards"]');
    this.addListButton = page.locator('[data-testid="add-list"]');
    this.newListInput = page.locator('[data-testid="add-list-input"]');
    this.newListCreateButton = page.locator('[data-testid="save"]');
    this.newTaskInput = page.locator('[data-testid="task-input"]');
    this.addTaskButton = page.locator('[data-testid="add-task"]');
    this.addNewTaskButton = page.locator('[data-testid="new-task"]');
    this.taskTitle = page.getByTestId('task-title');
    this.task = page.locator('[data-testid="task"]');
    this.body = page.locator('body');
    this.taskTitleInputOnModal = page.locator('[data-testid="task-module-name"]');
  }

  async renameBoard(boardName: string) {
    await this.boardTitle.fill(boardName);
    await this.boardTitle.press('Enter');
  }

  // starred board

  async goToBoard(boardName: string) {
    await this.page.goto(`http://localhost:3000/board/${boardName}`);
  }

  async getBoardByTitle(boardName: string) {
    return this.boardTitle.filter({ hasText: boardName });
    // .locator('[data-testid="star"]').click();
  }

  async hoverBoardByTitle(boardName: string) {
    await this.boardTitle.filter({ hasText: boardName }).hover();
  }

  async starBoard(boardName: string) {
    await this.hoverBoardByTitle(boardName);
  }

  async isStarredBoard(boardName: string) {
    await this.goToBoard(boardName);
    return (await this.starredBoards.count()) > 0;
  }

  async clickMyBoardsButton() {
    await this.myBoardsButton.click();
  }
  async addList(listName: string) {
    await this.addListButton.click();
    await this.newListInput.fill(listName);
    await this.newListCreateButton.click();
  }

  async getListByTitle(listTitle: string) {
    return this.listTitle.filter({ hasText: listTitle });
  }

  async createNewTaskInList(taskName: string, index: number) {
    await this.addNewTaskButton.nth(index).click();
    await this.newTaskInput.nth(index).fill(taskName);
    await this.addTaskButton.nth(index).click();
  }

  async createNewList(listName: string) {
    await this.addListButton.click();
    await this.newListInput.fill(listName);
    await this.newListCreateButton.click();
  }

  async reorderLists() {
    await this.list.first().dragTo(this.list.last());
  }

  async reorderTasksInList() {
    await this.task.nth(0).dragTo(this.task.nth(1));
  }

  async editTask(newTitle: string) {
    await this.task.click();
    await this.taskTitleInputOnModal.fill(newTitle);
  }

  async clickAway() {
    await this.body.click({ position: { x: 0, y: 0 } });
  }
}
