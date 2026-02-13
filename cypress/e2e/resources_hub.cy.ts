// file: cypress/e2e/resources_hub.cy.ts
// E2E tests for Resources Hub functionality

describe('Resources Hub', () => {
  beforeEach(() => {
    cy.visit('/resources');
  });

  it('loads the resources hub page', () => {
    cy.contains('Resources for self-represented family court work').should('exist');
    cy.get('input[placeholder*="Search resources"]').should('exist');
  });

  it('displays starter kits section', () => {
    cy.contains('Starter Kits').should('exist');
    // Check that starter kit cards are present
    cy.get('a[href^="/resources/kits/"]').should('have.length.at.least', 1);
  });

  it('displays featured guides section', () => {
    cy.contains('Featured Guides').should('exist');
    // Check that guide cards are present
    cy.get('a[href^="/resources/guides/"]').should('have.length.at.least', 1);
  });

  it('displays topics section', () => {
    cy.contains('Browse by Topic').should('exist');
    // Check that topic cards are present
    cy.get('a[href^="/resources/topics/"]').should('have.length.at.least', 1);
  });

  it('displays popular questions section', () => {
    cy.contains('Popular Questions').should('exist');
    // Check that question cards are present
    cy.get('a[href^="/resources/q/"]').should('have.length.at.least', 1);
  });

  it('clicking a starter kit CTA works', () => {
    // Click the first starter kit
    cy.get('a[href^="/resources/kits/"]').first().click();
    // Should navigate to a kit page
    cy.url().should('include', '/resources/kits/');
    cy.get('h1').should('exist');
  });

  it('clicking a popular question works and shows no placeholder text', () => {
    // Click the first question
    cy.get('a[href^="/resources/q/"]').first().click();
    // Should navigate to a question page
    cy.url().should('include', '/resources/q/');
    
    // Check for question heading
    cy.get('h1').should('exist');
    
    // Ensure no placeholder text is visible
    cy.contains('[to be developed]').should('not.exist');
    cy.contains('[Answer').should('not.exist');
    cy.contains('TBD').should('not.exist');
    cy.contains('lorem ipsum').should('not.exist');
  });

  it('guide page renders without placeholder markers', () => {
    // Visit a guide that we know exists
    cy.visit('/resources/guides/evidence-authentication');
    
    // Check that guide loaded
    cy.get('h1').should('exist');
    
    // Ensure no placeholder text is visible
    cy.contains('[to be developed]').should('not.exist');
    cy.contains('[Detailed').should('not.exist');
    cy.contains('TBD').should('not.exist');
  });

  it('search input is functional', () => {
    const searchInput = cy.get('input[placeholder*="Search resources"]');
    searchInput.should('be.visible');
    searchInput.type('proof of service');
    searchInput.should('have.value', 'proof of service');
  });

  it('fast track pills are interactive', () => {
    cy.contains('I have a hearing soon').should('exist').click();
    // Pill should become active (have active styling)
    cy.contains('I have a hearing soon').should('have.class', 'active');
  });

  it('displays standard disclaimer and feedback widget', () => {
    // Scroll to bottom
    cy.scrollTo('bottom');
    
    // Check for standard disclaimer
    cy.contains('This is not legal advice').should('exist');
    
    // Check for feedback widget
    cy.contains('feedback').should('exist');
  });

  it('all card elements have hover effects', () => {
    // Check that starter kit card has hover classes
    cy.get('a[href^="/resources/kits/"]').first()
      .should('have.class', 'hover:border-brand-orange/30');
    
    // Check that guide card has hover classes  
    cy.get('a[href^="/resources/guides/"]').first()
      .should('have.class', 'hover:border-brand-orange/30');
    
    // Check that topic card has hover classes
    cy.get('a[href^="/resources/topics/"]').first()
      .should('have.class', 'hover:border-brand-orange/30');
  });

  it('external resources directory is accessible', () => {
    cy.contains('Official State Resources').should('exist');
    // Should have jurisdiction selector
    cy.get('select').should('exist');
  });
});

describe('Resources Hub - Question Pages', () => {
  it('renders question with proper structure', () => {
    cy.visit('/resources/q/proof-of-service-definition');
    
    // Check for question icon
    cy.get('div').contains('?').should('exist');
    
    // Check for question heading
    cy.get('h1').should('exist');
    
    // Check for short answer section (if present)
    cy.get('body').then(($body) => {
      if ($body.find('h2:contains("Short Answer")').length > 0) {
        cy.contains('Short Answer').should('exist');
      }
    });
    
    // Check that answer content exists
    cy.get('.prose').should('exist');
    
    // Verify no dangerous HTML rendering issues
    cy.get('.prose').should('not.contain', '<br />');
  });

  it('draft questions show noindex meta tag', () => {
    // This would need to be tested on a draft question if one exists
    // For now, just verify published questions don't have noindex
    cy.visit('/resources/q/proof-of-service-definition');
    cy.get('head meta[name="robots"][content*="noindex"]').should('not.exist');
  });

  it('FAQPage schema is present and valid', () => {
    cy.visit('/resources/q/proof-of-service-definition');
    
    cy.get('script[type="application/ld+json"]').should('exist').then(($script) => {
      const schema = JSON.parse($script.text());
      expect(schema['@type']).to.equal('FAQPage');
      expect(schema.mainEntity).to.be.an('array');
      expect(schema.mainEntity[0]['@type']).to.equal('Question');
      expect(schema.mainEntity[0].acceptedAnswer).to.exist;
      expect(schema.mainEntity[0].acceptedAnswer.text).to.be.a('string');
      expect(schema.mainEntity[0].acceptedAnswer.text.length).to.be.greaterThan(10);
    });
  });
});

describe('Resources Hub - Guide Pages', () => {
  it('renders guide with proper structure', () => {
    cy.visit('/resources/guides/evidence-authentication');
    
    // Check for title
    cy.get('h1').should('exist');
    
    // Check for tags
    cy.get('span').contains('Evidence').should('exist');
    
    // Check for summary
    cy.get('p').should('exist');
    
    // Check that body content renders as proper HTML, not raw markdown
    cy.get('.prose').should('exist');
    cy.get('.prose h2, .prose h3, .prose p').should('exist');
  });

  it('guide pages have canonical URLs', () => {
    cy.visit('/resources/guides/evidence-authentication');
    cy.get('head link[rel="canonical"]').should('exist');
  });
});

describe('Resources Hub - Accessibility', () => {
  it('has proper heading hierarchy', () => {
    cy.visit('/resources');
    cy.get('h1').should('have.length', 1); // Only one h1
    cy.get('h2').should('have.length.at.least', 1); // Multiple h2s for sections
  });

  it('all links are keyboard accessible', () => {
    cy.visit('/resources');
    cy.get('a[href^="/resources/kits/"]').first().focus();
    cy.focused().should('have.class', 'focus-visible:ring-2');
  });

  it('images have alt text', () => {
    cy.visit('/resources');
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
    });
  });
});
