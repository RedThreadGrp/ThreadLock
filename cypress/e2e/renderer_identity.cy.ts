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
  });

  describe('/resources/exhibits-guide', () => {
    beforeEach(() => {
      cy.visit('/resources/exhibits-guide');
    });

    it('must contain legacyResource-v1 renderer (legacy page)', () => {
      cy.get('[data-renderer="legacyResource-v1"]').should('exist');
    });

    it('must not contain resourceQA-v2 renderer', () => {
      cy.get('[data-renderer="resourceQA-v2"]').should('not.exist');
    });

    it('renders the correct page content', () => {
      // Verify it's the correct page
      cy.get('h1').should('exist');
      cy.contains('exhibit', { matchCase: false }).should('exist');
    });
  });

  describe('Renderer Identity Coverage', () => {
    it('all question pages use resourceQA-v2', () => {
      // Test a few question pages to ensure consistency
      const questionPages = [
        '/resources/q/proof-of-service-definition',
        '/resources/q/what-is-service-of-process',
      ];

      questionPages.forEach((page) => {
        cy.visit(page);
        cy.get('[data-renderer="resourceQA-v2"]').should('exist');
        cy.get('[data-renderer="legacyResource-v1"]').should('not.exist');
      });
    });

    it('all guide pages use resourceQA-v2', () => {
      // Test guide pages
      cy.visit('/resources/guides/evidence-authentication');
      cy.get('[data-renderer="resourceQA-v2"]').should('exist');
      cy.get('[data-renderer="legacyResource-v1"]').should('not.exist');
    });

    it('legacy resource pages use legacyResource-v1', () => {
      // Test legacy pages
      cy.visit('/resources/exhibits-guide');
      cy.get('[data-renderer="legacyResource-v1"]').should('exist');
      cy.get('[data-renderer="resourceQA-v2"]').should('not.exist');
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
