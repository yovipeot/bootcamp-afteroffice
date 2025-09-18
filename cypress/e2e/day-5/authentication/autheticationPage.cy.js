require('cypress-xpath');

describe('coba coba', async function() {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Login Success', async function () {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.xpath('//input[@name="username"]').type('Admin');
        await cy.xpath('//input[@name="password"]').type('admin123');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.url().should('include', '/dashboard');
    })

    it('Login Failed', async function() {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.xpath('//input[@name="username"]').type('Admin');
        await cy.xpath('//input[@name="password"]').type('admin12');
        await cy.xpath('//button[@type="submit"]').click();
        // await cy.xpath('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials');
        await cy.expect('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]).text.to.equal("Invalid credentials")');
    });
});