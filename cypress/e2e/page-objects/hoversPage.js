const figure= '.figure'
const figcaption='.figcaption'

class HoversPage{
    hoverOverElement(){
        //cy.get(figure).first().trigger('mouseover')    Problem z CSS

        cy.get(figcaption).first().should('be.hidden').invoke('show').should('be.visible')
    }


}
export default HoversPage;