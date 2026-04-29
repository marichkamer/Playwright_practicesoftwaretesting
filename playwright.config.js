import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: 2,
  workers: 2,
 
  reporter: [
    ['list'],
    ['html'] ,
    ['allure-playwright'] 
  ],

  use: {
    baseURL: 'https://practicesoftwaretesting.com/',
    headless: true,

    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
