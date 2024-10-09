import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {

  readonly container: Locator;
  readonly feedTabs: Locator;

  constructor(page: Page) {
    super(page);
    this.container = page.locator('div[class="container page"]');
    this.feedTabs = this.container.locator('li[class="nav-item"]');
  }
}
