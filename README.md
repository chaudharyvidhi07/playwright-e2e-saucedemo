# Playwright E2E Automation Framework – SauceDemo

A production-style end-to-end automation framework built using **Playwright (JavaScript)**.

This project demonstrates scalable test architecture, CI optimization, and modern automation best practices.

---

## Application Under Test

https://www.saucedemo.com/

---

## Architecture Overview

- Playwright Test Runner (JavaScript)
- Page Object Model (POM)
- Storage State Authentication
- Cross-Browser Execution (Chromium, Firefox, WebKit)
- Parallel Execution
- GitHub CI
- Protected Branch Workflow (main + develop)

---

## Test Strategy

### Smoke Tests
- Critical user flows
- Executed on Pull Requests
- Fast feedback loop

### Regression Tests
- Full checkout flow
- Executed nightly via scheduled pipeline

### Authentication Strategy
- Login performed once using setup project
- `storageState` reused across test projects
- Eliminates repetitive UI login steps

---

## Running Tests Locally

Install dependencies:

```bash
npm install
npx playwright install
npm run test:smoke
npm run test:regression
npm run test:headed
