describe("Marketing Layout Consistency", () => {
  const pages = ["/", "/resources", "/sarahs-story", "/founder-story"];
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
        ["/resources", "/sarahs-story", "/founder-story"].forEach((page) => {
          cy.visit(page)
            .get("header")
            .invoke("outerHeight")
            .then((h) => {
              expect(Math.abs((h as number) - baselineHeaderHeight)).to.be.lessThan(4);
            });
          cy.get("section[style*='background-image']")
            .invoke("outerHeight")
            .then((h) => {
              expect(Math.abs((h as number) - baselineHeroHeight)).to.be.lessThan(50);
            });
        });
      });
  });
});
