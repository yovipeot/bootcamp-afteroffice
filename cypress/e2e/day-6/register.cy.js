const url = 'https://demoqa.com/select-menu'
const url2 = 'https://demo.automationtesting.in/Register.html'
const selectMenu = '//select[@id="oldSelectMenu"]';

describe('Register day 6', async function () {
    it.skip('Static Dropdown', async function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        await cy.visit(url);
        //pilih pakai index
        await cy.xpath(selectMenu).select('Purple');
        //pilih pakai value
        await cy.xpath(selectMenu).select('4');
        //pilih pakai text
        await cy.xpath(selectMenu).select('Black');
    });

    it('Dropdown Looping', async function () {
        await cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        
        let dropdown = '#Skills';
        let skilArray = [];
        let expectedSkill = [
            'C', 'C++', 'C#', 'Java', 'JavaScript', 'Perl', 'PHP', 'Python', 'Ruby', 'Swift'
        ];

        await cy.visit(url2);
        await cy.get(dropdown).find('option').each(function(eachOption){
            // cy.log(opteion);
            const value = eachOption.val();
            skilArray.push(value);
        });
        // cy.log(skilArray);
        await cy.wrap(skilArray).should('include.members', expectedSkill);
    });

    it('Dynamic Dropdown', async function () {
        await cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        await cy.visit(url);
        await cy.wait(5000);

        await cy.xpath(selectMenu).select(value);

    })

    it('autoSuggest Dropdown', async function () {
        await cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        let selectCountryDropdown = '//span[@class="selecytion"]';
        let searchCountry = '//input[@class="select2-search__field"]';
        let optionList = '//li[@class="select2-results__option"]';

        cy.visit(url2);

        cy.xpath(selectCountryDropdown).click();
        cy.xpath(searchCountry).type('in');
        cy.wait(5000);
        cy.xpath(optionList).contains('India').click();
    })

    it('Checkbox', async function () {
        await cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit(url2);
        // cy.wait(5000);

        let checkbox = 'input[@type="checkbox"]';

        await cy.xpath(checkbox).first().check().should('be.checked');
        await cy.xpath(checkbox).eq(2).check().should('be.checked');
        await cy.xpath(checkbox).last().check().should('be.checked');
        await cy.xpath(checkbox).check('Movies').check().should('be.checked');

        
        // await cy.xpath(checkbox).first().uncheck();
        // await cy.xpath(checkbox).eq(2).uncheck();
        // await cy.xpath(checkbox).last().uncheck();
        
    })

    it('Checkbox', async function () {
        await cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit(url2);
        // cy.wait(5000);

        let checkbox = 'input[@type="checkbox"]';

        await cy.xpath(checkbox).first().check().should('be.checked');
        await cy.xpath(checkbox).eq(2).check().should('be.checked');
        await cy.xpath(checkbox).last().check().should('be.checked');
        await cy.xpath(checkbox).check('Movies').check().should('be.checked');

        
        // await cy.xpath(checkbox).first().uncheck();
        // await cy.xpath(checkbox).eq(2).uncheck();
        // await cy.xpath(checkbox).last().uncheck();
        
    })

    it.only('Calendar', async function () {
        await cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        await cy.visit('https://jqueryui.com/datepicker/');
        cy.get('.demo-frame')
        .its('0.contentDocument.body')
        .should('not.empty')
        .then(cy.wrap)
        .xpath('//input[@id="datepicker"]')
        .type('06/25/2025')
        .click();

        // await cy.visit('https://jqueryui.com/datepicker/');
        // cy.get('.demo-frame')
        // .its('0.contentDocument.body')
        // .should('not.empty')
        // .then(cy.wrap)
        // .xpath('//a[@class="ui-datepicker-prev ui-corner-all"]')
        // // .type('06/25/2025')
        // .click();

        // await dateField.click();
        // dateField.type('06/25/2025');
    })
})