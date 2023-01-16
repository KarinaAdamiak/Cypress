const dropdownList= 'select'


class DropdownListPage{
    chooseDropdownListFirstOption(){
    
       cy.get(dropdownList).contains('Option 1').should('have.value', '1')
    
      // cy.get('[disabled]').click({force: true}) 
    }
}
export default DropdownListPage;