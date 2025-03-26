import { HomePage } from '../../pages/home-page';
import { BoardPage } from '../../pages/board-page';
import { LoginPage } from '../../pages/login-page';
import { test as base } from '@playwright/test';
import { LoginGherkinPage } from 'pages/login-gherkin-page';
import { HomeGherkinCase2Page } from 'pages/home-gherkin-case2-page';
import { RegistrationGherkinCase2Modal } from 'pages/modals/registration-gherkin-case2-modal';

type PagesFixture = {
  loginPage: LoginPage;
  homePage: HomePage;
  boardPage: BoardPage;
  loginGherkinPage: LoginGherkinPage;
  homeGherkinCase2Page: HomeGherkinCase2Page;
  registrationGherkinCase2Modal: RegistrationGherkinCase2Modal;
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
  loginGherkinPage: async ({ page }, use) => {
    await use(new LoginGherkinPage(page));
  },
  homeGherkinCase2Page: async ({ page }, use) => {
    await use(new HomeGherkinCase2Page(page));
  },
  registrationGherkinCase2Modal: async ({ page }, use) => {
    await use(new RegistrationGherkinCase2Modal(page));
  },
});

export { test };
export { expect } from '@playwright/test';
