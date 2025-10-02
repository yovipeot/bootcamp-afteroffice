require('cypress-xpath');

describe('PIM Employee', async function() {
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

    it('Add PIM Employee', async function() {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.xpath('//input[@name="username"]').type('Admin');
        await cy.xpath('//input[@name="password"]').type('admin123');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.url().should('include', '/dashboard');

        await cy.xpath('//span[text()="PIM"]').click();
        await cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
        await cy.xpath('//input[@name="firstName"]').type('Yovi');
        await cy.xpath('//input[@name="lastName"]').type('Riszan');
        await cy.xpath('//p[text()="Create Login Details"]/..//span').click();
        await cy.xpath('//label[text()="Username"]/../following-sibling::div/input').type('yoviriszan123');
        await cy.xpath('//label[text()="Password"]/../following-sibling::div/input').type('Password@123');
        await cy.xpath('//label[text()="Confirm Password"]/../following-sibling::div/input').type('Password@123');
        await cy.xpath('//button[@type="submit"]').click();

        await cy.xpath('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').should('have.text', 'Success');
    });

    it('Existing Employee Username already exists', async function() {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        await cy.xpath('//input[@name="username"]').type('Admin');
        await cy.xpath('//input[@name="password"]').type('admin123');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.url().should('include', '/dashboard');

        await cy.xpath('//span[text()="PIM"]').click();
        await cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
        await cy.xpath('//input[@name="firstName"]').type('Yovi');
        await cy.xpath('//input[@name="lastName"]').type('Riszan');
        await cy.xpath('//p[text()="Create Login Details"]/..//span').click();
        await cy.xpath('//label[text()="Username"]/../following-sibling::div/input').type('yoviriszan123');
        await cy.wait(3000);
        await cy.xpath('//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text', 'Username already exists');

        await cy.expect(true).to.equal(true);
    });

    it.only('Add System Users with employee', async function() {
        // await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        await cy.xpath('//input[@name="username"]').type('Admin');
        await cy.xpath('//input[@name="password"]').type('admin123');
        await cy.xpath('//button[@type="submit"]').click();
        await cy.url().should('include', '/dashboard');

        await cy.xpath('//span[text()="Admin"]').click();
        await cy.xpath('//button[normalize-space()="Add"]').click();
        await cy.xpath('//label[text()="User Role"]/../following-sibling::div//i').click();
        await cy.xpath('//div[@role="listbox"]//span[text()="Admin"]').click();
        await cy.xpath('//label[text()="Employee Name"]/../following-sibling::div//input').type('Yovi Riszan');
        await cy.wait(5000);
        await cy.xpath('//div[@role="listbox" and contains(@class,"oxd-autocomplete-dropdown")]').click();
        await cy.xpath('//label[text()="Status"]/../following-sibling::div//i').click();
        await cy.xpath('//div[@role="listbox"]//span[text()="Enabled"]').click();
        await cy.xpath('//label[text()="Username"]/../following-sibling::div/input').type('yoviriszan12345');
        await cy.xpath('//label[text()="Password"]/../following-sibling::div/input').type('Password@123');
        await cy.xpath('//label[text()="Confirm Password"]/../following-sibling::div/input').type('Password@123');
        await cy.xpath('//button[@type="submit"]').click();

        await cy.xpath('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').should('have.text', 'Success');
    });
});