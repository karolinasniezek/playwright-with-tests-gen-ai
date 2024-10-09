# Playwright typescript test framework for Upskill

## Description

This repository contains example usage and implementation of E2E & UI tests with Playwright framework.

Example tests are written for https://conduit.realworld.how/ page.

E2E tests cover user flows, no mocks are used.

UI tests focus on testing UI of given page, all calls to BE services are mocked. Setup of mocks is done via fixtures.

## Installation

1. Clone the repository.
2. Install the required dependencies by running following command in terminal

```console
npm install
```

3. Install playwright & browsers

```console
npx playwright install
```

## Running Tests

To run all tests against default environment (prod):

1. Open a terminal.
2. Run the following command:

```console
npm run test:all
```

To run e2e tests against default environment (prod):

```console
npm run test:e2e:prod
```

To run e2e tests against dev environment:

```console
npm run test:e2e:dev
```

To run UI tests against default environment (prod):

```console
npm run test:ui:prod
```

To run UI tests against dev environment:

```console
npm run test:ui:dev
```

More info about different options how to run tests can be found here https://playwright.dev/docs/running-tests
