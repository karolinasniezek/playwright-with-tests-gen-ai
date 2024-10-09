import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ArticlePage extends BasePage {
  
  readonly title: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading');
  }
}
