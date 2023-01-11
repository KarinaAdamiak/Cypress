const { contentType } = require("mime-types")


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
const url= 'https://jsonplaceholder.typicode.com/posts' 

describe ('my homework cypress test advanced',()=>{
    it ('should test HTTP mesthods', function(){

    cy.request(url).then((response) => {
    const body=JSON.stringify(rsponse.body)
    expect (response.status).to.eq(200)
    cy.log(body)

            cy.request ({
                method: PUT,
                url: url,
                body: JASON.stringify({
                    {
                        userId: 1,
                        id: 1,
                        title: 'make the difference',
                        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit CYPRESS molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                      }
                ),
                headers: {'Content-type': 'application/Jason'}
            }
        ).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data).has.property('title','make the difference')
            expect(response.body.data).has.property(' body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit CYPRESS molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
        
        })
    })

})




 


})
