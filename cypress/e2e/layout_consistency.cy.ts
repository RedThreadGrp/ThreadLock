describe("Marketing Layout Consistency", () => {
  const pages = ["/", "/resources", "/sarahs-story", "/founder-story"];
  const headerHeightSelector = "header";
  const heroSelector = "section[style*='background-image']";

  it("all pages share consistent header height and hero scale", () => {
    cy.viewport(1280, 900);
    let baselineHeaderHeight: number = 0;
    let baselineHeroHeight: number = 0;

    // Visit landing page first
    cy.visit("/");
    cy.get(headerHeightSelector).invoke("outerHeight").then((h) => {
      baselineHeaderHeight = h as number;
    });
    cy.get(heroSelector).invoke("outerHeight").then((h) => {
      baselineHeroHeight = h as number;
    });

    // Compare remaining pages
    pages.slice(1).forEach((page) => {
      cy.visit(page);
      cy.get(headerHeightSelector)
        .invoke("outerHeight")
        .then((h) => {
          expect(Math.abs((h as number) - baselineHeaderHeight)).to.be.lessThan(4);
        });
      cy.get(heroSelector)
        .invoke("outerHeight")
        .then((h) => {
          expect(Math.abs((h as number) - baselineHeroHeight)).to.be.lessThan(8);
        });
    });
  });
});
