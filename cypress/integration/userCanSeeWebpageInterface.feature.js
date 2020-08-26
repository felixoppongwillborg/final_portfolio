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

describe('user can display content on webpage', () => {
  it('user can display about me page', () => {
    cy.get('#aboutMeBtn').click()
    cy.contains('Full Stack Web Developer, with previous experience within the insurance')
  })
  it('user can display about me page', () => {
    cy.get('#projectsBtn').click()
    cy.contains('News on rails')
  })
  it('user can display about me page', () => {
    cy.get('#cvBtn').click()
    cy.contains('If Skadeförsäkring')
  })
})