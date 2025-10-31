describe('Marketing UI basics', () => {
  it('shows a single newsletter form and cookie banner flow', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');

    // Only one email input on the page
    cy.get('input[type="email"]').should('have.length', 1);

    // Cookie banner visible with correct aria attributes
    cy.get('[role="dialog"][aria-label="Cookie consent"]').should('exist');
    cy.get('[role="dialog"][aria-label="Cookie consent"]').should('contain', 'We use essential cookies');

    // Test rejecting non-essential cookies
    cy.contains('Reject Non-Essential').click();
    cy.get('[role="dialog"][aria-label="Cookie consent"]').should('not.exist');

    // Verify persistence - banner should not appear after reload
    cy.reload();
    cy.get('[role="dialog"][aria-label="Cookie consent"]').should('not.exist');

    // Clear and test accepting all cookies
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
    cy.get('[role="dialog"][aria-label="Cookie consent"]').should('exist');
    cy.contains('Accept All').click();
    cy.get('[role="dialog"][aria-label="Cookie consent"]').should('not.exist');

    // Verify persistence again
    cy.reload();
    cy.get('[role="dialog"][aria-label="Cookie consent"]').should('not.exist');
  });

  it('verifies cookie banner accessibility', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');

    // Check ARIA attributes
    cy.get('[role="dialog"]').should('have.attr', 'aria-label', 'Cookie consent');
    cy.get('[role="dialog"]').should('have.attr', 'aria-live', 'polite');

    // Check that buttons are keyboard accessible
    cy.contains('Reject Non-Essential').should('be.visible').focus();
    cy.focused().should('contain', 'Reject Non-Essential');
    
    cy.contains('Accept All').should('be.visible').focus();
    cy.focused().should('contain', 'Accept All');
  });

  it('verifies newsletter form only appears once across the site', () => {
    const pages = ['/', '/resources', '/sarahs-story', '/founder-story'];
    
    pages.forEach((page) => {
      cy.visit(page);
      // Should have at most one email input
      // (0 on sub-pages since SignupSection is only on homepage)
      cy.get('input[type="email"]').should('have.length.lessThan', 2);
    });
  });
});
