describe("User can see web page  interface", () => {
  it ('user can see landingpage', () => {
  cy.visit("localhost:3000");
  cy.get("#title").should('contain', 'Felix Oppong Willborg');
  cy.get("#aboutMeBtn").should('contain', 'About me');
  cy.get("#projectsBtn").should('contain', 'Projects');
  cy.get("#cvBtn").should('contain', 'Resumé');
  cy.get("#mySundayBtn").should('contain', 'Act out my Sunday')
  })
})