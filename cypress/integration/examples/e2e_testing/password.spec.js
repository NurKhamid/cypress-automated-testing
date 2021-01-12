
describe('Password test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click on the sign in button', () => {
        cy.get('#signin_button').click()
    })

    it('should click on the forgotten password', () => {
        cy.get('.offset3 > a').click()  // class offset3 on a tag
    })

    it('should fill email form', () => {
        cy.get('#user_email').type("test.email@email.com")
    })

    it('should submit the form', () => {
        cy.contains('Send Password').click()
    })
});
