describe ('my first test',() => {
    it('visit main page and click top menu bottom', function(){
        cy.visit('https://fabrykatestow.pl/')
        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
       
        cy.url().should('eq','https://fabrykatestow.pl/ciekawostki/')
        
        cy.wait(2000)
        
        cy.go('back')

    })
    
    
    })