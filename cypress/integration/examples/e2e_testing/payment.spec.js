const { should } = require("chai");

describe('Payment Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')   // include for url, contain for text
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password) //This line using customize function on commands.js
        })
    })

    it('should send new payment (fake)', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2020-01-10 {enter}')
        cy.get('#sp_description').type('Just description')
        cy.get('#pay_saved_payees').click()
    })

    it('should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted')
    })
});
