const inputKey='#target'
const keypressResult='#keyPressResult'

class KeypressPage{

 checkKeypressReaction(){

    cy.get(inputKey).click()
    cy.get(inputKey).type('t')
    cy.get(keypressResult).should('have.text','You entered: T')

    }


 }
export default KeypressPage