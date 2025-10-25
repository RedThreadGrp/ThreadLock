// Cypress E2E support file
// This file is processed and loaded automatically before test files
// You can read more here: https://on.cypress.io/configuration

// Ignore uncaught exceptions from Firebase and React errors when using dummy credentials
Cypress.on('uncaught:exception', (err) => {
  // Ignore Firebase errors and React errors when using dummy credentials
  if (
    err.message.includes('Firebase') ||
    err.message.includes('firebase') ||
    err.message.includes('Minified React error') ||
    err.message.includes('invariant')
  ) {
    return false;
  }
  // Allow other errors to fail the test
  return true;
});
