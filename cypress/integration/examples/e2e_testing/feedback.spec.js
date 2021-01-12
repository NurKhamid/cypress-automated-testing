describe('Feedback Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('should filling the feedback form', () => {
        cy.get('#name').type('Your name')
        cy.get('#email').type('email@mail.com')
        cy.get('#subject').type('your subject')
        cy.get('#comment').type('your full comment')
    })

    it('should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('should display feedback message', () => {
        cy.url().should('include', 'sendFeedback.html')
        cy.get('#feedback-title').contains('Feedback')
    }) 
});
