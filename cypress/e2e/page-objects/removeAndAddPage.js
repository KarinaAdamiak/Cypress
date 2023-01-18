const addButton='button[onclick="addElement()"]'
const deleteButton='#elements>.added-manually'

class AddAndRemovePage{
    checkAddingElement(){
        cy.get(addButton).click().click()
        cy.get(deleteButton).should('be.visible')


    }
    checkDeletingElement(){
        cy.get(deleteButton).first().click()
        cy.get(deleteButton).last().should('be.visible')



    }

}
export default AddAndRemovePage