// giftcards.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const baseUrl = 'http://localhost:3000/giftcards';

describe('GiftCard Test', () => {
    it('Confirms gift card data', () => {
        cy.visit(baseUrl)
        cy.get('.data').children().should('have.length', 336)
        cy.get('.product_name').contains('Amazon Spain')
        cy.get('.currency_code').should(($currency_code) => {
            expect($currency_code).to.have.length(84)
            expect($currency_code).to.contain('EUR')
            expect($currency_code).to.contain('USD')
            expect($currency_code).to.not.contain('GBP')
        })
    })
  })


