import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
    toConsole: true
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx,js,jsx}',
    supportFile: 'cypress/support/e2e.ts',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
