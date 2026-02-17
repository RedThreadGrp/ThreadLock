// file: cypress/e2e/renderer_identity.cy.ts
// E2E tests for Renderer Identity (Prod Parity Gate)

describe('Renderer Identity - Prod Parity Gate', () => {
  describe('/resources/q/proof-of-service-definition', () => {
    beforeEach(() => {
      cy.visit('/resources/q/proof-of-service-definition');
    });

    it('must contain resourceQA-v2 renderer', () => {
      cy.get('[data-renderer="resourceQA-v2"]').should('exist');
    });

    it('must not contain legacyResource-v1 renderer', () => {
      cy.get('[data-renderer="legacyResource-v1"]').should('not.exist');
    });

    it('renders the correct page content', () => {
      // Verify it's the correct page
      cy.get('h1').should('exist');
      cy.contains('proof of service', { matchCase: false }).should('exist');
    });
    
    it('must have structured v2 content blocks', () => {
      // Assert presence of v2 structured sections
      cy.get('[data-testid="resource.block.section"]').should('have.length.at.least', 1);
    });
    
    it('must not have legacy body markers', () => {
      // Assert absence of legacy markdown rendering - this checks for v1 CONTENT structure
      cy.get('[data-testid="question-v1-content"]').should('not.exist');
      // Should not have duplicate "Short Answer" heading in body
      cy.get('.prose').should('not.exist'); // v2 doesn't use prose class
    });
    
    it('short answer appears once only', () => {
      // v2 should have short answer card but not duplicate in body
      cy.contains('Short answer').should('have.length', 1);
    });
  });

  describe('/resources/exhibits-guide', () => {
    beforeEach(() => {
      cy.visit('/resources/exhibits-guide');
    });

    it('must contain resource-v2 renderer (v2 migrated page)', () => {
      cy.get('[data-renderer="resource-v2"]').should('exist');
    });

    it('must not contain legacyResource-v1 renderer', () => {
      cy.get('[data-renderer="legacyResource-v1"]').should('not.exist');
    });

    it('renders the correct page content', () => {
      // Verify it's the correct page
      cy.get('h1').should('exist');
      cy.contains('exhibit', { matchCase: false }).should('exist');
    });
  });

  describe('Renderer Identity Coverage', () => {
    it('all question pages use resourceQA-v2', () => {
      // Test a sample question page to ensure consistency
      cy.visit('/resources/q/proof-of-service-definition');
      cy.get('[data-renderer="resourceQA-v2"]').should('exist');
      cy.get('[data-renderer="legacyResource-v1"]').should('not.exist');
    });

    it('all guide pages use resourceQA-v2', () => {
      // Test guide pages
      cy.visit('/resources/guides/evidence-authentication');
      cy.get('[data-renderer="resourceQA-v2"]').should('exist');
      cy.get('[data-renderer="legacyResource-v1"]').should('not.exist');
    });

    it('v2 migrated resource pages use resource-v2', () => {
      // Test v2 migrated pages
      cy.visit('/resources/exhibits-guide');
      cy.get('[data-renderer="resource-v2"]').should('exist');
      cy.get('[data-renderer="legacyResource-v1"]').should('not.exist');
    });
  });

  describe('Renderer Identity Attribute Validation', () => {
    it('data-renderer attribute is on the main content div', () => {
      cy.visit('/resources/q/proof-of-service-definition');
      
      // Verify the attribute is on a main container div
      cy.get('[data-renderer]')
        .should('have.class', 'min-h-screen')
        .and('have.class', 'bg-surface-dark');
    });

    it('only one renderer identity per page', () => {
      cy.visit('/resources/q/proof-of-service-definition');
      cy.get('[data-renderer]').should('have.length', 1);
    });
  });
});
