describe('Sample test', () => {
    it('Navigates to the Button component page and back', () => {
        cy.visit('http://localhost:8080');
        cy.get('[data-test="button-link"]').click();
        cy.url().should('eq', 'http://localhost:8080/#/button')

        cy.get('[data-test="back-button"]').click({force: true});
        cy.url().should('eq', 'http://localhost:8080/#/')
    })
})