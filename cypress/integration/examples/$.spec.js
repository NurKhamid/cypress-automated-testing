describe('Cypress .$ function', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    })
})