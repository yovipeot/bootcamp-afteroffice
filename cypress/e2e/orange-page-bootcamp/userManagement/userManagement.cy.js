require('cypress-xpath');

describe('Authentication', async function() {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
});
