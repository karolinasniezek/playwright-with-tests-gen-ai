# Upskill description

## Introduction

You are steppinh into the role of an automation tester, filling the position left vacant by a departing team member. The team is currently working on a project for a client that specializes in live blogging, aiming to develop an application that facilitates knowledge sharing among its users.

The client requires that regression tests be automated. Additionally, it is essential to test the front end separately from the back end using mocked data with Hooks. Moreover, a new suite of API and Visual Regression tests needs to be incorporated.

As part of the automated testing efforts, a framework has been established and configured, and initial test scenarios have been developed. The next step is to automate the completed functionalities of the application.

Furthermore, all written tests must be integrated into the CI/CD pipeline to ensure continuous testing and seamless deployment.
 
As part of the automated testing, the framework was created and configured, and the first test scenarios were created. The next step that needs to be taken is to automate the completed application functionalities.

## General description

`URL`: [Conduit App](https://conduit.realworld.how)
`email`: `to register`
`password`: `to define`

[Test repository](https://bitbucket.org/xebiapoland/playwright_typescript_upskill) 

Useful links (also for learning before starting upskill):
Javascript: [Javascript Course](https://kursjs.pl/), [The Modern JavaScript Tutorial](https://javascript.info/), [Learn TypeScript in Y Minutes](https://learnxinyminutes.com/docs/typescript/).
Playwright: [Introduction to Playwright](https://testautomationu.applitools.com/playwright-intro/?utm_campaign=Email-for-TAU-Course-Advanced-Playwright&utm_content=Test-Automation-U&utm_medium=Email&utm_source=Marketo&utm_term=Email-for-TAU-Course-Advanced-Playwright), [Advanced Playwright](https://testautomationu.applitools.com/playwright-advanced/).

## Sprints

### Sprint 1: Environment Setup and E2E Login Tests

1. **Goals:**

	•	Set up the testing environment and tool.

	•	Implement end-to-end (E2E) login tests to ensure basic authentication functionality works.

2. **Tasks:**

	**Environment Setup:**

	•	Install and configure testing tool Playwright.

	•	Verify access to all necessary resources like APIs, and mock data.

	**E2E Login Tests:**

	•	Implement automated E2E tests to verify successful login.

	•	Test both valid and invalid login credentials.

### Sprint 2: Mock Login Tests for Login

1. **Goals:**

	•	Create mock-based login tests for a more isolated testing environment.

2. **Tasks:**

	**Mock Login Tests:**

	•	Set up mock services or API responses to simulate login functionality.

	•	Create login tests using mocks to reduce reliance on external services during test execution.

	•	Test different scenarios including success, failure, and errors.

### Sprint 3: Mock Articles and Tags Tests, Visual Regression for Login and Articles

1. **Goals:**

	•	Expand testing to include articles and tags using mock data.

	•	Perform visual regression testing on login and articles.

2. **Tasks:**

	**Mock Articles and Tags Tests:**

	•	Create mock data for articles and tags.

	•	Implement tests for creating, editing, and deleting articles and tags.

	•	Validate that tags are properly linked to articles.
	
	**Visual Regression Testing for Login:**

	•	Capture baseline screenshots for login page UI.

	•	Implement visual tests to track UI changes during login.

	•	Ensure visual consistency across different screen sizes and devices.

	**Visual Regression Testing for Articles:**

	•	Capture screenshots of articles page for visual regression.

	•	Track visual changes after UI updates.

	•	Ensure consistent styling, font, and layout for articles across supported browsers and devices.

### Sprint 4: API Testing for Articles and Tags, Entity Tests

1. **Goals:**

	•	Write API tests for articles and tags.

	•	Optionally, perform entity tests using AJV schema validator.

2. **Tasks:**

	**API Tests for Articles and Tags:**

	•	Write automated tests to verify the articles and tags API endpoints.

	•	Test all CRUD (Create, Read, Update, Delete) operations for articles and tags.

	•	Validate the correctness of HTTP responses (status codes, data formats, etc.).

	**Entity Tests Using AJV Schema Validator (Optional):**

	•	Define and validate data schemas for articles and tags using AJV (if applicable).

	•	Write tests to ensure the integrity of the data structure for entities.

### Sprint 5: Bitbucket Pipeline Setup

1. **Goals:**

	•	Configure Bitbucket pipelines for continuous integration.

2. **Tasks:**

	**Bitbucket Pipeline Setup:**

	•	Set up Bitbucket pipeline to automate the testing process.

	•	Ensure the pipeline runs tests for each commit or pull request.

	•	Include both unit and integration tests in the pipeline.

	•	Set up a step for uploading and storing the artifacts.