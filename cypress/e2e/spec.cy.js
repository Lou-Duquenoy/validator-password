// cypress/integration/example.spec.js

describe("Test Fonctionnel", () => {
  it("Valider le mot de passe", () => {
    cy.visit("http://127.0.0.1:5173/");

    cy.get('input[name="password"]').type("pass");

    cy.get('button[type="submit"]').click();

    cy.get(".error-message").should(
      "contain",
      "Le mot de passe doit comporter au moins 8 caractères"
    );

    cy.get('input[name="password"]').clear();

    cy.get('input[name="password"]').type("password");

    cy.get('button[type="submit"]').click();

    cy.get(".error-message").should(
      "contain",
      "Le mot de passe doit contenir au moins 1 chiffre"
    );

    cy.get('input[name="password"]').clear();

    cy.get('input[name="password"]').type("password123");

    cy.get('button[type="submit"]').click();

    cy.get(".error-message").should(
      "contain",
      "Le mot de passe doit contenir au moins une lettre majuscule"
    );
    cy.get(".error-message").should(
      "contain",
      "Le mot de passe doit contenir au moins un caractère spécial"
    );

    cy.get('input[name="password"]').clear();

    cy.get('input[name="password"]').type("Passw0rd!");

    cy.get('button[type="submit"]').click();
  });
});
