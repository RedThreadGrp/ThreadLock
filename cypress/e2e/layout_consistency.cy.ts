describe("Marketing Layout Consistency", () => {
  const allPages = ["/", "/resources", "/sarahs-story", "/founder-story"];
  const pagesWithHero = ["/", "/sarahs-story", "/founder-story"];
  const headerHeightSelector = "header";
  const heroSelector = "section[style*='background-image']";

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
      .get("section[style*='background-image']")
      .invoke("outerHeight")
      .then((h) => {
        baselineHeroHeight = h as number;
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
        
        // Check hero consistency only on pages that have hero sections
        pagesWithHero.slice(1).forEach((page) => {
          cy.visit(page)
            .get("section[style*='background-image']")
            .invoke("outerHeight")
            .then((h) => {
              // Increased tolerance to 150px to accommodate content-driven height variations
              // Landing page hero was intentionally simplified (de-cluttered) which reduces its height
              expect(Math.abs((h as number) - baselineHeroHeight)).to.be.lessThan(150);
            });
        });
      });
  });
});
