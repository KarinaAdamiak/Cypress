

describe ('my homework cypress test',()=>{
    it ('visit main website and take a screenshot', function(){
        cy.visit('https://fabrykatestow.pl/')
        cy.get('img[class="neve-site-logo skip-lazy"]').should('be.visible')
        cy.url('https://fabrykatestow.pl/').should('eq','https://fabrykatestow.pl/')

        cy.get('a[href="https://fabrykatestow.pl/#kursy"]').eq(0).click()

        cy.get('a[href="https://fabrykatestow.pl/cypress"][class="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow"]').click()
    
        cy.get('[class="attachment-large size-large wp-image-2373"]').scrollIntoView()
        cy.get('[class="elementor-image"]').eq(2).should('be.visible')
        
        cy.get('[class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-51c8325f"]').screenshot()
        
        
        


    })



})