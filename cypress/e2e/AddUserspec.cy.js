describe("User", () => {
  it('clicks the link "Register"', () => {
    cy.visit("http://localhost:3000/Register");
    cy.get('[name="Name"]').type("Cristiano Ronaldo");
    cy.get('[name="Password"]').type("CR7");
    cy.get('[name="Age"]').type("36");
    cy.get('[name="City"]').type("Buonos Airos");
    cy.get('.btn').click();
  });
});