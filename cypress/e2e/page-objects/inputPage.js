//Input field takes only numbers!

const input='input[type="number"]'

class InputPage{

//positive case    
    typeNumberIntoField(){
        cy.get(input).clear()
        cy.get(input).type("123").should('have.value', "123")
    }
//negative case 
typeLettersIntoField(){
cy.get(input).clear()
cy.get(input).type("abc").should('not.have.value',"abc")
    }
}
export default InputPage;