//const { contentType } = require("mime-types")


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
//Advanced homework(Module 6)
const url= 'https://jsonplaceholder.typicode.com/posts/1' 
const url2='https://jsonplaceholder.typicode.com/posts/2'

describe ('put and delete scenario- advanced test',()=>{
    it ('should test HTTP method:PUT', function(){
//GET(DOMYŚLNA)
    cy.request(url).then((response) => {
    const body=JSON.stringify(response.body)   //żeby nie był array-->powstaje string
    expect (response.status).to.eq(200)
    cy.log(response.body)
    })
    cy.request({
                method: 'PUT',
                url: url,
                body: ({
                        title: 'make the difference',
                        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit CYPRESS molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                        userId: 1,
                    }),
                headers: {'Content-type': 'application/Json'}
    }

    ).then ((response)=>{
        const body=JSON.stringify(response.body)
        expect(response.status).to.eq(200)
        expect(body).to.include('make the difference')
        expect(body).to.contain('CYPRESS')
    })
    
    })

   it ('should test HTTP method:DELETE', function(){
        cy.request(url2).then((response) => {
            const body=JSON.stringify(response.body)   //żeby nie był array-->powstaje string
            expect (response.status).to.eq(200)
            cy.log(response.body)
        })
        cy.request({
            method:'DELETE',
            url: url2,
            body:({
                userId: 1,
                id: 2,
                title: 'qui est esse',
                body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
            }),
            headers: {'Content-type': 'application/Json'}
        }
            ).then((response)=> {
                const body=JSON.stringify(response.body)
                expect(response.status).to.eq(200)      
              //expect(response.status).to.eq(204)  //HTTP Status 204 (No Content) indicates that the server has successfully fulfilled the request and that there is no content to send in the response payload body.
              //expect(body).not.visible('id: 2')
   })})})
