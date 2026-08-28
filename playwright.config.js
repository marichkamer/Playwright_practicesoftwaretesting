import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // fullyParallel: true,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,

  // retries: 2,
  retries: 0,
  // workers: 2,
  workers: 1,

 
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright'] 
  ],

  use: {
    baseURL: 'https://practicesoftwaretesting.com/',
    headless: true,

    // trace: 'on-first-retry'
    trace: 'on'
  },

  projects: [
  {
    name: 'public',
    grep: /@public/,
    use: {
      ...devices['Desktop Chrome'],
    },
  },

  {
    name: 'auth',
    grep: /@auth/,
    use: {
      ...devices['Desktop Chrome'],
    },
  },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
