//Zakładki na stronie
import Urls from "./urls";

const inputHeader='#inputs-header'
const checkboxHeader= '#checkbox-header'
const dropdownListHeader= '#dropdownlist-header'
const hoversHeader='#hovers-header'

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

    visitPage(){
        const url= new Urls()     //object
        url.visitHomePage()
    }
}
export default HomePage;