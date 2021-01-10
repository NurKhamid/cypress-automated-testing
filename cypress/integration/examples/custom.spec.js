describe('Custom Commands', () => {
    it('should be login using custom cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
});
