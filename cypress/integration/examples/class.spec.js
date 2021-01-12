
class BasePage{
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    before(function(){
        // runs before all test inside describe
        // setup your test data or test context
        //send or reset the database
        HomePage.loadHomePage()
    })

    after(function() {
        // runs after all tests inside describe block are done
        // test clean up
        // clean cookies or localstorage
    })

    beforeEach(function() {
        // runs before each it block in the describe
    })

    afterEach(function() {
        //run after each it block in the describe
    })

    it.only('1st IT', () => {   // This will be skipped
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it('2nd IT', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
});
