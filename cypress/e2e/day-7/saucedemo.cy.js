import loginPage from "../../pages/loginPage";
import loginLocators from "../../locators/loginLocators";

describe("Saucedemo Web Test", function () {
  let users;

  before(function () { 
    cy.fixture("loginData").then((data) => {
      users = data;
    });
  });

  beforeEach(function () {
    cy.visit("/");
  });

  it("Login with valid data", function () {
    expect(users).to.have.property('validUser');
    loginPage.login(users.validUser.username, users.validUser.password);
    loginPage.verifyLogin();
  });

  it("Login with invalid data", function () {
    expect(users).to.have.property('invalidUser');
    loginPage.login(users.invalidUser.username, users.invalidUser.password);
    cy.get(loginLocators.errorMessage).should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it ("Add to cart items", function () {
    expect(users).to.have.property('validUser');
    loginPage.login(users.validUser.username, users.validUser.password);
    loginPage.verifyLogin();

    // Tambah item ke cart
    cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').should('be.visible').click();

    // Verifikasi cart badge
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
  });
});