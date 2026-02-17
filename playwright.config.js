import { defineConfig, devices } from '@playwright/test';
import fs from 'fs';

const baseURL =
  process.env.TEST_ENV === 'prod'
    ? 'https://www.saucedemo.com'
    : 'https://www.saucedemo.com';

export default defineConfig({
  use: {
    baseURL,
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.spec\.js/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/storageState.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: '.auth/storageState.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: '.auth/storageState.json',
      },
      dependencies: ['setup'],
    },
  ],
});
