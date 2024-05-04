import { AutomationPracticeForm } from "../../pageObjects/automationPracticeForm.page";
import { BasePage } from "../../pageObjects/base.page";

describe("Demoqa", () => {
    context("Practice Form", () => {
        beforeEach(() => {
            AutomationPracticeForm.visit();
        });
        it("Form", () => {
            // Input all the necessary information in the text fields, buttons, etc, where it is not
            // stated otherwise.
            AutomationPracticeForm.firstNameInput.type("Jane");
            AutomationPracticeForm.lastNameInput.type("Doe");
            AutomationPracticeForm.emailInput.type("jane@gmail.com");
            AutomationPracticeForm.radioButtonFemale.click();
            AutomationPracticeForm.numberInput.type('2699009900');
            // Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
            AutomationPracticeForm.dateOfBirthInput.click();
            AutomationPracticeForm.selectYear.select('1930');
            AutomationPracticeForm.selectMonth.select('February');
            AutomationPracticeForm.selectDay28.click();
            // Set Subjects to Economics.
            AutomationPracticeForm.subjectsInput.type('Economics{enter}');
            // Set Hobbies to Music.
            AutomationPracticeForm.radioButtonMusic.click();
            // Upload an image of your choice.
            // Create folder “files” and put the image there
            // Might come in handy: https://docs.cypress.io/api/commands/selectfile
            AutomationPracticeForm.chooseFileButton.selectFile('cypress/files/pexels-adriano-marquez-763912820-20985362.jpg')
            AutomationPracticeForm.addressField.type('My Addres 1-2');
            // Set State to NCR.
            AutomationPracticeForm.stateInput.type('NCR{enter}');
            // Set City to Delhi.
            AutomationPracticeForm.cityInput.type('Delhi{enter}');
            // Click Submit.
            AutomationPracticeForm.submitButton.click();
            // Validate that each Labeled row contains the correct information.
            AutomationPracticeForm.tableOutput.should('contain.text', 'Jane Doe');
            AutomationPracticeForm.tableOutput.should('contain.text', 'jane@gmail.com');
            AutomationPracticeForm.tableOutput.should('contain.text', '2699009900');
            AutomationPracticeForm.tableOutput.should('contain.text', '1930');
            AutomationPracticeForm.tableOutput.should('contain.text', 'February');
            AutomationPracticeForm.tableOutput.should('contain.text', '28');
            AutomationPracticeForm.tableOutput.should('contain.text', 'Economics');
            AutomationPracticeForm.tableOutput.should('contain.text', 'Music');
            AutomationPracticeForm.tableOutput.should('contain.text', 'pexels-adriano-marquez-763912820-20985362.jpg');
            AutomationPracticeForm.tableOutput.should('contain.text', 'My Addres 1-2');
            AutomationPracticeForm.tableOutput.should('contain.text', 'NCR');
            AutomationPracticeForm.tableOutput.should('contain.text', 'Delhi');
        });
    });
});