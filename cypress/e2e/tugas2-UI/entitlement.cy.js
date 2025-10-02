require('cypress-xpath');

describe('Entitlement Page', async function() {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
    });

    it('Login Success', async function () {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.xpath('//input[@name="username"]').type('Admin');
        await cy.xpath('//input[@name="password"]').type('admin123');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.url().should('include', '/dashboard');
    })

    it.only('Add Entitlement', async function() {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.xpath('//input[@name="username"]').type('Admin');
        await cy.xpath('//input[@name="password"]').type('admin123');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.url().should('include', '/dashboard');

        await cy.xpath('//span[text()="Leave"]').click();
        await cy.xpath('(//li[@class="oxd-topbar-body-nav-tab --parent"])[1]').click();
        await cy.xpath('//li[@class="--active oxd-topbar-body-nav-tab --parent"]//li[1]').click();
        await cy.xpath('//label[text()="Employee Name"]/../following-sibling::div//input').type('Joy  Smith');
        await cy.wait(5000);
        await cy.xpath('//div[@role="listbox" and contains(@class,"oxd-autocomplete-dropdown")]').click();
        await cy.xpath('//label[text()="Leave Type"]/../following-sibling::div//i').click();
        await cy.xpath('//div[@role="listbox"]//span[text()="CAN - Bereavement"]').click();
        await cy.xpath('//label[text()="Leave Period"]/../following-sibling::div//i').click();
        await cy.xpath('//div[@role="listbox"]//span[text()="2025-01-01 - 2025-31-12"]').click();
        await cy.xpath('//label[text()="Entitlement"]/../following-sibling::div//input').type('12');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.wait(10000);
        await cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-button-margin"]').click();

        await cy.xpath('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').should('have.text', 'Success');
    });
});