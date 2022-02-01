describe("Button Tests", () => {
  it("Navigates to the Button component page, verifies content, and clicks button", () => {
    cy.visit("http://localhost:8080");
    cy.get('[data-test="button-link"]').click();
    cy.url().should("eq", "http://localhost:8080/#/button");

    cy.get('[data-test="component-title"]').should("have.text", "Button");
    cy.get('[data-test="submitted-value"]').should("contain", "false");
    cy.get('[data-test="loading-value"]').should("contain", "false");

    cy.get('[data-test="button"]')
      .should("contain", "Submit")
      .click()
      .should("contain", "Submitting")
      .wait(3000)
      .should("contain", "Submitted");

    cy.get('[data-test="submitted-value"]').should("contain", "true");
    cy.get('[data-test="loading-value"]').should("contain", "false");

    cy.get('[data-test="reset"]').should("have.text", " Reset ").click();

    cy.get('[data-test="button"]').should("contain", "Submit");

    cy.get('[data-test="submitted-value"]').should("contain", "false");
    cy.get('[data-test="loading-value"]').should("contain", "false");
  });
});
