import PIMLocators from "../../locators/PIMLocators";
import PIMPage from "../../pages/pimPage";
require('cypress-xpath');

describe("PIM Module Tests", () => {
    const username = "Admin";
    const password = "admin123";
    const firstName = "John";
    const lastName = "Doe";
    const userName = "johndoe123";
    const empPassword = "Password@123";
    const confirmPassword = "Password@123";
    let employeeId = "";

    beforeEach(() => {
        cy.visit("/web/index.php/auth/login");
        PIMPage.login(username, password);
        PIMPage.verifyLogin();
    });

    it("should add a new employee", () => {
        PIMPage.addEmployee(firstName, lastName, userName, empPassword, confirmPassword);

        // Ambil Employee ID setelah menambah employee
        cy.xpath(PIMLocators.employeeIdInput)
            .invoke('val')
            .then((id) => {
                employeeId = id;
            });

        PIMPage.verifyAddEmployeeSuccess();
    });

    it("should search for the newly added employee by ID", () => {
        // Pastikan employeeId sudah terisi dari test sebelumnya
        expect(employeeId).to.not.equal("");
        PIMPage.searchEmployeeById(employeeId);
        PIMPage.verifyEmployeeInTable(firstName, lastName);
    });
});