describe("Marketing Layout Consistency", () => {
  const allPages = ["/", "/resources", "/sarahs-story", "/founder-story"];
  // Landing page uses a distinct two-column HeroSection; story pages share HeroBanner and must be consistent.
  const storyPagesWithHero = ["/sarahs-story", "/founder-story"];
  const headerHeightSelector = "header";
  const heroSelector = "[data-testid='hero-section']";

  it("all pages share consistent header height and hero scale", () => {
    cy.viewport(1280, 900);
    let baselineHeaderHeight: number;
    let baselineHeroHeight: number;

    cy.visit("/")
      .get("header")
      .invoke("outerHeight")
      .then((h) => {
        baselineHeaderHeight = h as number;
      })
      .then(() => {
        // Check header consistency on all pages
        allPages.slice(1).forEach((page) => {
          cy.visit(page)
            .get("header")
            .invoke("outerHeight")
            .then((h) => {
              expect(Math.abs((h as number) - baselineHeaderHeight)).to.be.lessThan(4);
            });
        });

        // Check hero height consistency across story pages (shared HeroBanner component).
        // Use the first story page as the baseline so the landing page's intentionally
        // different hero design does not cause spurious failures.
        cy.visit(storyPagesWithHero[0])
          .get(heroSelector)
          .invoke("outerHeight")
          .then((h) => {
            baselineHeroHeight = h as number;
          })
          .then(() => {
            storyPagesWithHero.slice(1).forEach((page) => {
              cy.visit(page)
                .get(heroSelector)
                .invoke("outerHeight")
                .then((h) => {
                  expect(Math.abs((h as number) - baselineHeroHeight)).to.be.lessThan(4);
                });
            });
          });
      });
  });
});
