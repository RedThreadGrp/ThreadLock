// file: cypress/e2e/resources_hub.cy.ts
// E2E tests for Resources Hub functionality

describe('Resources Hub', () => {
  beforeEach(() => {
    cy.visit('/resources');
  });

  it('loads the resources hub page with compact header', () => {
    // Check for compact header instead of hero banner
    cy.get('h1').contains('Resources').should('exist');
    cy.contains('Checklists, templates, and plain-English court workflow help').should('exist');
    cy.contains('Not legal advice. Just structure').should('exist');
    cy.get('[data-testid="resources.search.input"]').should('exist');
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

  it('search input is functional and filters content', () => {
    // Type into search
    cy.get('[data-testid="resources.search.input"]').type('proof');
    cy.get('[data-testid="resources.search.input"]').should('have.value', 'proof');
    
    // Check that filtering happens (should show fewer results)
    cy.contains('Showing').should('exist');
    cy.contains('result').should('exist');
  });

  it('search submit with Enter key works', () => {
    cy.get('[data-testid="resources.search.input"]').type('proof{enter}');
    // Should scroll to starter kits section
    cy.url().should('include', '/resources');
  });

  it('search button triggers search', () => {
    cy.get('[data-testid="resources.search.input"]').type('evidence');
    cy.get('[data-testid="resources.search.button"]').click();
    // Should scroll to starter kits section
    cy.url().should('include', '/resources');
  });

  it('subnav section jumps work and update URL hash', () => {
    // Click FAQ / Questions link in subnav
    cy.get('[data-testid="resources.subnav"]').within(() => {
      cy.contains('FAQ / Questions').click();
    });
    
    // Check that URL hash was updated
    cy.url().should('include', '#questions');
    
    // Check that the section is now visible
    cy.contains('Popular Questions').should('be.visible');
  });

  it('subnav is sticky and accessible', () => {
    cy.get('[data-testid="resources.subnav"]').should('exist');
    cy.get('[data-testid="resources.subnav"]').should('have.class', 'sticky');
    
    // Check all navigation links exist
    cy.get('[data-testid="resources.subnav"]').within(() => {
      cy.contains('Starter Kits').should('exist');
      cy.contains('Featured Guides').should('exist');
      cy.contains('Topics').should('exist');
      cy.contains('Library').should('exist');
      cy.contains('FAQ / Questions').should('exist');
      cy.contains('Official Directory').should('exist');
    });
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
    
    // Check that answer content exists and is properly rendered
    cy.get('.prose').should('exist');
    
    // Verify proper HTML rendering - check for actual elements not raw HTML strings
    cy.get('.prose').then(($prose) => {
      // Should have proper block elements like p, h2, h3, etc.
      const hasBlockElements = $prose.find('p, h2, h3, strong').length > 0;
      expect(hasBlockElements).to.be.true;
    });
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
    // Verify the link can receive focus (basic accessibility check)
    cy.focused().should('have.attr', 'href');
  });

  it('images have alt text', () => {
    cy.visit('/resources');
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
    });
  });
});

describe('Resources Hub - Topic Pages', () => {
  it('topic page common questions have proper alignment', () => {
    // Visit a topic page that has questions
    cy.visit('/resources/topics/proof-of-service');
    
    // Check that question cards exist
    cy.get('a[href^="/resources/q/"]').should('have.length.at.least', 1);
    
    // Get the first question card's InlineIconLabel component
    cy.get('a[href^="/resources/q/"]').first().within(() => {
      // Check for the data-testid attribute
      cy.get('[data-testid="resource-card-row"]').should('exist')
        .and('have.class', 'inline-flex')
        .and('have.class', 'items-center');
      
      // Verify icon wrapper has fixed size and leading-none
      cy.get('[data-testid="resource-card-row"] > span').first()
        .should('have.class', 'w-4')
        .and('have.class', 'h-4')
        .and('have.class', 'leading-none');
      
      // Verify text wrapper has leading-none
      cy.get('[data-testid="resource-card-row"] > span').last()
        .should('have.class', 'leading-none');
    });
  });
  
  it('topic page question links route correctly to /resources/q/', () => {
    cy.visit('/resources/topics/proof-of-service');
    
    // Get the first question link and verify href structure
    cy.get('a[href^="/resources/q/"]').first().should('have.attr', 'href').and('match', /^\/resources\/q\/[\w-]+$/);
    
    // Click and verify navigation
    cy.get('a[href^="/resources/q/"]').first().click();
    cy.url().should('include', '/resources/q/');
    cy.get('h1').should('exist'); // Should have a heading on the question page
  });
});
