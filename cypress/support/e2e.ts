// Cypress E2E support file
// This file is processed and loaded automatically before test files
// You can read more here: https://on.cypress.io/configuration

// Ignore uncaught exceptions from Firebase when using dummy credentials in CI/CD
// This allows visual layout tests to run without valid Firebase configuration
Cypress.on('uncaught:exception', (err) => {
  // Ignore specific Firebase initialization errors that occur with dummy credentials
  const ignoredErrors = [
    'Firebase',
    'firebase',
    'auth/invalid-api-key',
    'app/invalid-api-key',
    // React error #418 is often thrown when Firebase initialization fails
    'Minified React error #418',
    'invariant=418'
  ];
  
  const shouldIgnore = ignoredErrors.some(errorPattern => 
    err.message.includes(errorPattern)
  );
  
  if (shouldIgnore) {
    // Return false to prevent test failure
    return false;
  }
  
  // Allow other errors to fail the test
  return true;
});
