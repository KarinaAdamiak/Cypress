// describe ('my first test',() => {
//     it('visit main page and click top menu bottom', function(){
//         cy.visit('https://fabrykatestow.pl/')
//         cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
       
//         cy.url().should('eq','https://fabrykatestow.pl/ciekawostki/')
        
//         cy.wait(2000) 
//         cy.go('back')
        
//         cy.wait(2000)
//         cy.go('forward')

//         cy.wait(2000) 
//         cy.go(-1)

//         cy.wait(2000) 
//         cy.go(1)

//         cy.getAllCookies()


//     })
    
//     const url= 'https://simpletestsite.fabrykatestow.pl/'
//     const iframeHeader= '#iframe-header'
//     const iframe= 'iframe'
//     const button1= '#simpleButton1'

//     })
//     describe('iframe test', ()=>{
//         it('testing iframe',function(){
//             cy.visit(url)
//             const iframeTest= cy.get (iframe)
//             .its('0.contentDokuument.body')
//             .should('be.visible')
//             .then (cy.wrap)

//             cy.get(iframeHeader).click()

//             iframeTest.find(button).click()

//         })

//     })
    //Kontrolki:Checkbox and Input
import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"

describe ('my first test scenario-a simple web page', ()=> {

    it ('test inputs', function() {
        const homePage= new HomePage();  //adding an object
        homePage.visitPage()
        homePage.clickInputsTabs()

    })
    })

