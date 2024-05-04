import { BasePage } from "./base.page";

export class AutomationPracticeForm extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }
    static get firstNameInput(){
        return cy.get('[id="firstName"]');
    }
    static get lastNameInput(){
        return cy.get('[id="lastName"]');
    }
    static get emailInput(){
        return cy.get('[id="userEmail"]');
    }
    static get radioButtonFemale(){
        return cy.get('[for="gender-radio-2"]');
    }
    static get numberInput(){
        return cy.get('[id="userNumber"]');
    }
    static get dateOfBirthInput(){
        return cy.get('[id="dateOfBirthInput"]');
    }
    static get selectYear(){
        return cy.get('[class="react-datepicker__year-select"]');
    }
    static get selectMonth(){
        return cy.get('[class="react-datepicker__month-select"]');
    }
    static get selectDay28(){
        return cy.get('[class="react-datepicker__day react-datepicker__day--028"]');
    }
    static get subjectsInput(){
        return cy.get('[id="subjectsInput"]');
    }
    static get radioButtonMusic(){
        return cy.get('[for="hobbies-checkbox-3"]');
    }
    static get chooseFileButton(){
        return cy.get('[id="uploadPicture"]');
    }
    static get addressField(){
        return cy.get('[id="currentAddress"]');
    }
    static get stateInput(){
        return cy.get('[id="state"]');
    }
    static get cityInput(){
        return cy.get('[id="city"]');
    }
    static get submitButton(){
        return cy.get('[id="submit"]');
    }
    static get tableOutput(){
        return cy.get('[class="table-responsive"]');
    }
    
}