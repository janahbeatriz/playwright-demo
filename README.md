# Playwright Demo

This repository demonstrates end-to-end test automation using Playwright. The project showcases basic web automation tasks such as navigating through pages, interacting with elements, and validating content.

## Technologies Used
- **Playwright**: A powerful browser automation library used for testing modern web applications.
- **Node.js**: A JavaScript runtime environment.
- **JavaScript**: The scripting languages used for writing automation scripts.

## Features
- Automated browser testing with Playwright.
- Cross-browser testing (Chromium, WebKit, Firefox).
- Examples of page interaction, navigation, form submission, and content validation.
- Basic assertions to validate application behavior.

## Getting Started

### Prerequisites
Before you start, ensure you have the following installed on your machine:
- **Node.js** (https://nodejs.org/)
- **Playwright** (can be installed through npm)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/janahbeatriz/playwright-demo.git
   cd playwright-demo
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. If you havenât already, install the necessary browsers used in Playwright:

   ```bash
   npx playwright install
   ```

### Running the Tests

To run the tests, you can use the following command:

```bash
npx playwright test
```

This will run all the test scripts located in the `tests/` folder. Playwright supports parallel execution, so tests will be executed concurrently across different browsers for faster execution.

### Writing Your Own Tests

You can add your own test scripts in the `tests/` directory. Here's an example of a basic test script:

```javascript
const { test, expect } = require('@playwright/test');

test('Visit a webpage and validate title', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
```

### Cross-Browser Testing

Playwright allows you to run tests in different browsers. To run tests in a specific browser, use the `--project` flag:

- **Chromium**:  
  ```bash
  npx playwright test --project=chromium
  ```
  
- **Firefox**:  
  ```bash
  npx playwright test --project=firefox
  ```
  
- **WebKit**:  
  ```bash
  npx playwright test --project=webkit
  ```

### Continuous Integration (CI) Setup

You can integrate Playwright tests into your CI/CD pipelines for automated testing on every push. Example configuration for GitHub Actions:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npx playwright install
      - run: npx playwright test
```



## Viewing Results from GitHub

After pushing the tests to GitHub and running them via GitHub Actions, the results are automatically displayed on a **GitHub Pages** site. You can view the detailed test execution reports at the following URL:

[Playwright Test Reports](https://janahbeatriz.github.io/playwright-demo/)

This report includes visual feedback of test execution, including:

- Success/failure status for each test.
- Detailed logs and output.
- Information on each step of the tests (including timing and test details).

The GitHub Pages site automatically updates after each test run triggered by a push to the repository or a pull request.


## Contributing

Feel free to open issues and submit pull requests. Contributions are welcome!
