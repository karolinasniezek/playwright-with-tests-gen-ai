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

# Trello Application - created for Xebia Upskill program

## Description
Trello is a powerful, visual project management tool designed to help teams and individuals organize tasks and projects efficiently. Utilizing a Kanban board system, Trello allows users to create boards filled with lists and cards that represent tasks, making it easy to track progress and collaborate in real-time.

## Getting Started
To start using Trello you can simply create an account (local data base). 

You can create your first board, add lists for different phases of your project, and begin populating it with cards representing tasks. Trello's intuitive interface makes it easy to drag and drop cards between lists as work progresses.
Whether you're managing personal tasks or collaborating on team projects, Trello offers a straightforward yet powerful solution to keep you organized and productive.

## Technical start

### To install the app run:
- `npm install`

### To open the app run:
- `npm start`

### All data are storring into the [data.json](public/data/data.json) file.

## If you update the App run:
- `npx grunt dev` to build the app again.

## To open `Swagger` docs open:
- `http://localhost:3000/api-docs/`

## Tips
There is an option to activate access to hidden tools
- press `F1` on the keyboard it will open the tools to reset boards / lists / tasks / users

## Docker
App can be run as a docker container. Run in the repo root:
- `docker-compose up --build`