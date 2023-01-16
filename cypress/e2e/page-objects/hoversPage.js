const figure= '.figure'


class HoversPage{
    hoverOverElement(){
        cy.get(figure).first().trigger('mouseover')

    }


}
export default HoversPage;