import loginLocators from "../locators/loginLocators";
require('cypress-xpath');

class LoginPage {
    fillForm(locator, text) {
        cy.get(locator).clear().type(text);
    }

    clickItem(locator) {
        cy.get(locator).click();
    }

    login(username, password) {
        this.fillForm(loginLocators.usernameInput, username);
        this.fillForm(loginLocators.passwordInput, password);
        this.clickItem(loginLocators.loginButton);
    }

    verifyLogin() {
        cy.url().should("include", "/inventory.html");
        cy.get(".app_logo").should("have.text", "Swag Labs");
    }

    verifyLoginSuccess() {
        cy.url().should("include", "/inventory.html");
        cy.get(".app_logo").should("have.text", "Swag Labs");
    }

    verifyLoginFailed(errorMesg) {
        cy.get(loginLocators.errorMessage).should("be.visible").and("contain.text", errorMesg);
    }
}

export default new LoginPage();