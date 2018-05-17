describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
  });

  it('Change view when film was selected', () => {
    cy.visit('/');
    cy.wait(3000);
    cy.get('.film-item').first().click();
    cy.wait(1000);
    cy.get('.poster').find('.film__title');
  });
});

