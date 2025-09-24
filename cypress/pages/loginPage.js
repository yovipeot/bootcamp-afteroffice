import loginLocators from "../locators/loginLocators";

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
}

export default new LoginPage();