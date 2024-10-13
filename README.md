# E2E tests 

# Install playwright
Run on terminal this command:
npm init playwright@latest 

# Running tests
To run the tests you have to oprn new trminal enter command: 
npx playwright test --workers=1 --headed
To avoid parallel running.

# View Report
Enter the terminal - npx playwright show-report

# Work with any kind of browser
Enter playwright.config.js and in projects:
/* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    Choose a browsers. it will run parallel.

# To degug enter command
  
  npx playwright test --debug# AutoTest
