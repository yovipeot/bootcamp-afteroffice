require('cypress-xpath');

describe('Authentication', async function() {
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

    it('Forgot Password', async function() {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
        await cy.url().should('include', '/requestPasswordResetCode');
        await cy.xpath('//h6[@class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text', 'Reset Password');
        await cy.xpath('//input[@placeholder="Username"]').type('Admin');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.xpath('//h6[normalize-space()="Reset Password link sent successfully"]').should('have.text', 'Reset Password link sent successfully');
    });
});