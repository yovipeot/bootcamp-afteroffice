require('cypress-xpath');

describe('PIM Employee', async function() {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
    });

    it('Login Success', async function () {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.xpath('//input[@name="username"]').type('yoviriszan12345');
        await cy.xpath('//input[@name="password"]').type('Password@123');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.url().should('include', '/dashboard');
    })
})