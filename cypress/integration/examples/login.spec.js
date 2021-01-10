const { expect } = require("chai");

describe('Working with inputs', () => {
    it('should override the current time', () => {
        const date = new Date(2021, 1, 12).getTime() //return a timestamp
        cy.clock(date)  // I think this is used when we need manipulate the date
        cy.log(date)
    })

    it('should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item', {log: true})
        cy.title().should('include', 'Zero - Log in')
    })

    it('should fill username', () => {
        cy.get('#user_login').as('username')  //assign #user_login as 'username' just for alias
        cy.get('@username').clear()           //change to @username
        cy.get('@username').type('Some Invalid Name', {delay:50})
    })

    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some Invalid Password', {delay:50})
    })

    it('should mark the checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('should submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.')
    })
})