import { first } from "rxjs"

const firstName= '#fname'
const lastName= '#lname'
const submitButton='#formSubmitButton'


class BasicFormPage{

    checkFormSubmitPositive(){
        cy.get(firstName).type('Kara')
        cy.get(lastName).type('Test')

        cy.get(submitButton).click()
        cy.on('window alert',(t) =>{
            expect (t).to.contain('success')


        }
    
        )}
}
        


        



     













export default BasicFormPage