const { expect } = require("chai");

describe('Browser action', () => {
    it('should load  books website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout: 10000})
        cy.url().should('include', 'index.html')
        cy.log('Before Reload!')
        cy.reload()
        cy.log('After loaded!')
    })

    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click()
    })

    it('should click olio book detail', () => {
        cy.get('a').contains('Olio').click() //Contains means text, not the attribute
    })

    it('should check the price of Olio', () => {
        cy.get('.price_color').contains('£23.88')
    })

    
    // it('Should load correct url', () => {
    //     cy.visit('http://example.com/', {timeout: 10000})
    // })

    // it('Should check correct url', () => {
    //     cy.url().should('include', 'example.com')  //text the string included
    // })

    // it('should wait for 3 seconds', () => {
    //     cy.wait(3000)
    // })

    // it('should pause the execution', () => {
    //     cy.pause()
    // })

    // it('should chcek for correct element on the page', () => {
    //     cy.get('h1').should('be.visible') //check h1 element should be visible
    // })
    
}) 