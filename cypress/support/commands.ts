// ***********************************************
// Custom Cypress commands for E2E tests
// https://on.cypress.io/custom-commands
// ***********************************************

// Example custom command:
// Cypress.Commands.add('login', (email, password) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom command types here
    }
  }
}

export {}
