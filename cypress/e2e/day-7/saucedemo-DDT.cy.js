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

  // it("locketed out user", function () {
  //   // expect(users).to.have.property('lockedOutUser');
  //   loginPage.login(users.locketOutUser.username, users.locketOutUser.password);
  //   loginPage.verifyLoginFailed(users.locketOutUser.errorMesg);
  // });

  it("Login with multiple users", function () {
    cy.fixture("loginDataMultiple").then((users) => {
      Object.entries(users).forEach(([key, user]) => {
        cy.log(`Testing: ${key}`);
        LoginPage.login(user.username, user.password);
        if (user.expectedURL) {
          LoginPage.verifyURL(user.expectedURL);
        } else {
          LoginPage.verifyLoginFailed(user.errorMsg);
        }
        cy.visit("/");
      });
    });
  });
});