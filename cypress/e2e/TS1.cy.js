describe ('my first test',() => {
    it('visit main page and click top menu bottom', function(){
        cy.visit('https://fabrykatestow.pl/')
        cy.get('#nv-primary-navigation-main').contains('Newsletter').click


    })
    
    
    })