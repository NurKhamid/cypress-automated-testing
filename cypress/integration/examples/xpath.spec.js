describe('Xpath with cypress example', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click on element using x-path', () => {
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click()
    })

    it('should display login form', () => {
        cy.xpath('//form').should('have.length', 1)
    })
})