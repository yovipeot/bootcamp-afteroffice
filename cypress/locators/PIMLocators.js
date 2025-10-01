class PIMLocators {
    PIMSidebar = '//a[@class="oxd-main-menu-item active"]';
    addEmployeeButton = '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]';
    firstNameInput = '//input[@name="firstName"]';
    lastNameInput = '//input[@name="lastName"]';
    employeeIdInput = '//label[text()="Employee Id"]/../following-sibling::div/input';
    createLoginDetailsCheckbox = '//p[text()="Create Login Details"]/..//span';
    usernameInput = '//label[text()="Username"]/../following-sibling::div/input';
    passwordInput = '//label[text()="Password"]/../following-sibling::div/input';
    confirmPasswordInput = '//label[text()="Confirm Password"]/../following-sibling::div/input';
    saveButton = '//button[@type="submit"]';
    successToast = '//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]';
    employeeListSidebar = '//a[text()="Employee List"]';
    searchEmployeeIdInput = '//label[text()="Employee Id"]/../following-sibling::div/input';
    searchButton = '//button[@type="submit"]';
    tableRows = '//div[@class="oxd-table-body"]/div';
    tableFirstRowFirstColumn = '//div[@class="oxd-table-body"]/div[1]/div/div[2]//a';
}

export default new PIMLocators();