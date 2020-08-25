describe("User can see web page  interface", () => {
  it ('user can see landingpage', () => {
  cy.visit("localhost:3000");
  cy.get("#title").should('contain', 'Felix Oppong Willborg');
  cy.get("#aboutButton").should('contain', 'About me');
  cy.get("#projectsButton").should('contain', 'Projects');
  cy.get("#cvButton").should('contain', 'Resumé');
  cy.get("mySundayButton").should('contain', 'Act out my Sunday')
  })
})