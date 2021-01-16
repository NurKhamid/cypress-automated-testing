
describe('New payee test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')   // include for url, contain for text
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()
        })
    })

    it('should add new payee to this list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('Address')
        cy.get('#np_new_payee_details').type('Detail')
        cy.get('#add_new_payee').click()
    })

    it('should show succes message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was succesfully created.')
    })
});
