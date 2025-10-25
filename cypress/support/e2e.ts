// Cypress support file for E2E tests
// This file is processed and loaded automatically before test files.

// Import Cypress commands
import './commands'

// Suppress Firebase initialization errors when using dummy credentials in CI
// This prevents console noise during visual consistency tests that don't require Firebase
Cypress.on('uncaught:exception', (err) => {
  // Ignore Firebase configuration errors during tests with dummy credentials
  if (
    err.message.includes('Firebase') ||
    err.message.includes('auth/invalid-api-key') ||
    err.message.includes('projectId') ||
    err.message.includes('apiKey')
  ) {
    return false
  }
  // Let other exceptions fail the test
  return true
})

// Optional: Global test configuration
beforeEach(() => {
  // Add any global setup here
})

afterEach(() => {
  // Add any global teardown here
})
