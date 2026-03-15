// import React from 'react'
// import page from './page'

// describe('<page />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<page />)
//   })
// })



describe('<Page />', () => {
  it('renders a button and logs on click', () => {
    cy.visit('/'); // Assuming your route is the root
    cy.contains('Click Me').should('exist'); // Check that the button is on the page
    cy.get('button').click(); // Click the button
    // Add a way to confirm log if needed (e.g., assert something visible after click)
  });
});