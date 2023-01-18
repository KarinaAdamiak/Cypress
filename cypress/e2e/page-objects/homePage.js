//Zakładki na stronie
import Urls from "./urls";

const inputHeader='#inputs-header'
const checkboxHeader= '#checkbox-header'
const dropdownListHeader= '#dropdownlist-header'
const hoversHeader='#hovers-header'
const authHeader='#basicauth-header'
const formHeader='#form-header'
const keypressHeader='#keypresses-header'
const removeAndAddHeader='#addremoveelements-header'
const statusCode='#statuscodes-header'
const iframe='#iframe-header'
class HomePage{

    clickInputsTab(){
        cy.get(inputHeader).click()
    }
    
    clickCheckboxTab(){
        cy.get(checkboxHeader).click()
    }
    
    clickDropDownList(){
        cy.get(dropdownListHeader).click()
    }

    clickHoversTab(){
        cy.get(hoversHeader).click()
    }

    clickAuthorizationTab(){
        cy.get(authHeader).click()
        
    }
    clickFormTab(){
        cy.get(formHeader).click()

    }
    clickKeypressTab(){
        cy.get(keypressHeader).click()

    }    
    clickRemoveAndAddTab(){
    cy.get(removeAndAddHeader).click()

    }
    clickStatusCodeTab(){
    cy.get(statusCode).click()
    }
    clickIframeTabe(){
     cy.get(iframe).click()
    }
    
    visitPage(){
        const url= new Urls()     //object
        url.visitHomePage()
    }



}
export default HomePage;