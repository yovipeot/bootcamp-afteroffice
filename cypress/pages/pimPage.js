import PIMLocators from "../locators/PIMLocators";

class PIMPage {
    clickItem(locator) {
        cy.get(locator).click();
    }

    fillForm(locator, text) {
        cy.get(locator).clear().type(text);
    }

    verifyLogin() {
        cy.url().should("include", "/dashboard/index");
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("have.text", "Dashboard");
    }

    login(username, password) {
        this.fillForm(PIMLocators.usernameInput, username);
        this.fillForm(PIMLocators.passwordInput, password);
        this.clickItem(PIMLocators.loginButton);
    }

    addEmployee(firstName, lastName, userName, password, confirmPassword) {
        this.clickItem(PIMLocators.PIMMenu);
        this.clickItem(PIMLocators.addEmployeeButton);
        this.fillForm(PIMLocators.firstNameInput, firstName);
        this.fillForm(PIMLocators.lastNameInput, lastName);
        this.clickItem(PIMLocators.createLoginDetailsCheckbox);
        this.fillForm(PIMLocators.usernameInput, userName);
        this.fillForm(PIMLocators.passwordInput, password);
        this.fillForm(PIMLocators.confirmPasswordInput, confirmPassword);
        this.clickItem(PIMLocators.saveButton);
    }

    verifyAddEmployeeSuccess() {
        cy.get(PIMLocators.successToast).should("be.visible").and("have.text", "Success");
    }

    searchEmployeeById(employeeId) {
        this.clickItem(PIMLocators.employeeListSidebar);
        this.fillForm(PIMLocators.searchEmployeeIdInput, employeeId);
        this.clickItem(PIMLocators.searchButton);
    }

    verifyEmployeeInTable(firstName, lastName) {
        cy.get(PIMLocators.tableRows).should("have.length", 1);
        cy.get(PIMLocators.tableFirstRowFirstColumn).should("have.text", `${firstName} ${lastName}`);
    }
}

export default new PIMPage();