describe('Signup Page Routing', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('verifies Individual/SRL CTA routes to subscribe with tracking params', () => {
    cy.contains('I am an individual')
      .closest('a')
      .should('have.attr', 'href', 'https://app.threadlock.ai/subscribe?src=marketing_signup&s=role_srl')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
  });

  it('verifies Professional/Pro CTA routes to pro/subscribe with tracking params', () => {
    cy.contains('I am a legal professional')
      .closest('a')
      .should('have.attr', 'href', 'https://app.threadlock.ai/pro/subscribe?src=marketing_signup&s=role_pro')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
  });

  it('verifies login link routes to app.threadlock.ai/login', () => {
    cy.contains('Log in here')
      .should('have.attr', 'href', 'https://app.threadlock.ai/login');
  });

  it('verifies all CTAs are clickable and visible', () => {
    // Individual CTA
    cy.contains('Continue to Personal Portal').should('be.visible');
    
    // Professional CTA
    cy.contains('Continue to Professional Portal').should('be.visible');
    
    // Login link
    cy.contains('Log in here').should('be.visible');
  });
});
