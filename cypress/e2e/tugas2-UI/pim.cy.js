import PIMLocators from "../../locators/PIMLocators";
import PIMPage from "../../pages/pimPage";

describe("PIM Module Tests", () => {
    const username = "Admin";
    const password = "admin123";
    const firstName = "John";
    const lastName = "Doe";
    const userName = "johndoe123";
    const empPassword = "Password@123";
    const confirmPassword = "Password@123";

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        PIMPage.login(username, password);
        PIMPage.verifyLogin();
    });

    it("should add a new employee", () => {
        PIMPage.addEmployee(firstName, lastName, userName, empPassword, confirmPassword);
        PIMPage.verifyAddEmployeeSuccess();
    });

    it("should search for the newly added employee by ID", () => {
        // Assuming Employee ID is auto-generated and can be fetched after adding an employee
        cy.get(PIMLocators.employeeIdInput).invoke('val').then((employeeId) => {
            PIMPage.searchEmployeeById(employeeId);
            PIMPage.verifyEmployeeInTable(firstName, lastName);
        });
    });
});