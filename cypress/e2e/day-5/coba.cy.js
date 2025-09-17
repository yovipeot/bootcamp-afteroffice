require('cypress-xpath');

describe('coba coba', async function() {
    it.skip('test coba', async function() {
        // cy.log('coba coba');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
    });

    it('xpath', async function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//input[@name="username"]').type('Admin');
        cy.xpath('//input[@name="password"]').type('admin123');
        cy.xpath('//button[@type="submit"]').click();
        cy.url().should('include', '/dashboard');
    }); 
});