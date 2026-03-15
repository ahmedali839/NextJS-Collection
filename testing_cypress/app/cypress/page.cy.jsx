// import React from 'react'
// import page from './page'

// describe('<page />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<page />)
//   })
// })

import Page from "./page";

describe("<Page />", () => {
  it("renders a button and logs on click", () => {
    cy.mount(<Page />); // Assuming your route is the root
    cy.contains("Submit").should("exist"); // Check that the button is on the page
    cy.get('[data-cy="name-input"]').should("exist");
    cy.get('[data-cy="email-input"]').should("exist");
    cy.get("button").click(); // Click the button
    // Add a way to confirm log if needed (e.g., assert something visible after click)

    // Submit empty form
    cy.contains("Submit").click();
    cy.contains("Name is required").should("exist");
    cy.contains("Email is required").should("exist");

    // Invalid email
    cy.get('[data-cy="email-input"]').type("wrong-email");
    cy.contains("Submit").click();
    cy.contains("Email is required").should("exist");

    cy.get('[data-cy="name-input"]').type("Ahmed");
    cy.get('[data-cy="email-input"]').type("ahmed@test.com");
    cy.contains("Submit").click();
    cy.contains("Form submitted successfully!").should("exist");

    cy.window().then((win) => {
      cy.spy(win.console, "log").as("consoleLog");
    });
    cy.contains("Submit").click();
   });
});
