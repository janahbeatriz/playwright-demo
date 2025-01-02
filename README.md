# Playwright Demo

Welcome to the **Playwright Demo** repository! This project demonstrates the usage of **Playwright** for end-to-end testing on a demo e-commerce website. The goal is to automate the testing of various purchase flows, including adding items to the cart, verifying cart items, and completing purchases.

Playwright is a Node.js library to automate Chromium, Firefox, and WebKit browsers with a single API, and it is used here to perform robust and reliable browser automation tests.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Running Tests](#running-tests)
7. [Test Execution](#test-execution)
8. [Test Reporting](#test-reporting)
9. [Test Results](#test-results)
10. [Viewing Results from GitHub](#viewing-results-from-github)
11. [Contributing](#contributing)
12. [License](#license)

---

## Project Overview

The `playwright-demo` repository automates common actions on a demo e-commerce website. It demonstrates several features such as:

- **Product Purchase Flow**: Adds products to the cart and proceeds to checkout.
- **Cart Verification**: Verifies that products are correctly added to the cart, including checking their price and availability.
- **Multi-product Purchases**: Tests the ability to place multiple orders at once and checks the integrity of cart data.
- **Price Verification**: Verifies that the total price in the cart matches the sum of individual item prices.

---

## Getting Started

These instructions will help you get this repository running on your local machine so you can start testing.

### Prerequisites

Ensure that your system has the following installed:

1. **Node.js (v14 or later)**: You can download and install it from [here](https://nodejs.org/en/).
2. **npm** (Node Package Manager): Typically installed with Node.js, you can verify this by running:
   ```bash
   npm -v

3. Playwright: Playwright is a browser automation library, which you'll need to install via npm: npm install playwright

Sure! Here's a complete README.md file that you can directly copy into your repository:

markdown
Copy code
# Playwright Demo

Welcome to the **Playwright Demo** repository! This project demonstrates the usage of **Playwright** for end-to-end testing on a demo e-commerce website. The goal is to automate the testing of various purchase flows, including adding items to the cart, verifying cart items, and completing purchases.

Playwright is a Node.js library to automate Chromium, Firefox, and WebKit browsers with a single API, and it is used here to perform robust and reliable browser automation tests.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Running Tests](#running-tests)
7. [Test Execution](#test-execution)
8. [Test Reporting](#test-reporting)
9. [Test Results](#test-results)
10. [Viewing Results from GitHub](#viewing-results-from-github)
11. [Contributing](#contributing)
12. [License](#license)

---

## Project Overview

The `playwright-demo` repository automates common actions on a demo e-commerce website. It demonstrates several features such as:

- **Product Purchase Flow**: Adds products to the cart and proceeds to checkout.
- **Cart Verification**: Verifies that products are correctly added to the cart, including checking their price and availability.
- **Multi-product Purchases**: Tests the ability to place multiple orders at once and checks the integrity of cart data.
- **Price Verification**: Verifies that the total price in the cart matches the sum of individual item prices.

---

## Getting Started

These instructions will help you get this repository running on your local machine so you can start testing.

### Prerequisites

Ensure that your system has the following installed:

1. **Node.js (v14 or later)**: You can download and install it from [here](https://nodejs.org/en/).
2. **npm** (Node Package Manager): Typically installed with Node.js, you can verify this by running:
   ```bash
   npm -v
Playwright: Playwright is a browser automation library, which you'll need to install via npm:
bash
Copy code
npm install playwright

Installation
Follow these steps to install and set up the project:

1. Clone the repository:
Clone the repository to your local machine using Git:
bash
Copy code
git clone https://github.com/janahbeatriz/playwright-demo.git

2. Navigate to the project directory:

After cloning the repository, move into the project folder:
bash
Copy code
cd playwright-demo

3. Install dependencies:
Use npm to install the required dependencies:npm install

4. Install Playwright browsers (optional, but recommended):

Playwright supports multiple browsers: Chromium, Firefox, and WebKit. You can install the necessary browsers by running:

bash
Copy code
npx playwright 

Project Structure
This repository follows a structured and modular approach to organizing tests using the Page Object Model (POM) design pattern. Here is a breakdown of the project:
├── pages/
│   ├── CartPage.js
│   ├── LoginPage.js
│   └── SignUpPage.js
│
├── tests/
│   ├── purchase.test.js
│   └── signUp.test.js
│
├── utils/
│   ├── helper.js
│   └── testData.js
│
├── package.json
├── playwright.config.js
└── README.md


Viewing Results from GitHub
After pushing the tests to GitHub and running them via GitHub Actions, the results are automatically displayed on a GitHub Pages site. You can view the detailed test execution reports at the following URL:

Playwright Test Reports

This report includes visual feedback of test execution, including success/failure status, logs, and details on each step of the tests.
