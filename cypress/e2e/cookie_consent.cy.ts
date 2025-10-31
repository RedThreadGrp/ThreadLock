describe("cookie consent", () => {
  it("asks once and persists across pages", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/resources");
    cy.contains("Accept All").click();
    cy.getCookie("tl_cc").should("have.property", "value", "accept");
    cy.get("[data-testid=cookie-banner]").should("not.exist");

    // Navigate within site
    cy.visit("/legal");
    cy.get("[data-testid=cookie-banner]").should("not.exist");
    cy.visit("/privacy");
    cy.get("[data-testid=cookie-banner]").should("not.exist");
  });

  it("persists rejection across pages", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.contains("Reject Non-Essential").click();
    cy.getCookie("tl_cc").should("have.property", "value", "reject");
    cy.get("[data-testid=cookie-banner]").should("not.exist");

    // Navigate within site
    cy.visit("/resources");
    cy.get("[data-testid=cookie-banner]").should("not.exist");
    cy.visit("/founder-story");
    cy.get("[data-testid=cookie-banner]").should("not.exist");
  });

  it("shows banner when no consent is set", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("[data-testid=cookie-banner]").should("exist");
  });
});
