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
import InputPage from "./page-objects/inputPage"
import HomePage from "./page-objects/homePage"
import CheckboxPage from "./page-objects/checkboxPage"
import DropdownListPage from "./page-objects/dropdownListPage"
import HoversPage from "./page-objects/hoversPage"
describe ('my first test scenario-a simple web page', ()=> {
   
    beforeEach(() =>{
    cy.visit('/');
   })

    it ('test inputs', function() {
        const homePage= new HomePage();  //adding an object
        homePage.clickInputsTab()

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
    })

    it ('test checkbox', function() {
        const homePage= new HomePage();  //adding an object
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckLastCheckbox()
    })

    it ('test dropdownList', function() {
        const homePage= new HomePage();  //adding an object
        homePage.clickDropDownList

        const dropdownPage = new DropdownListPage()
        dropdownPage.chooseDropdownListFirstOption()

})
    it ('test hovers', function() {
        const homePage= new HomePage();  //adding an object
        homePage.clickHoversTab()

    const hoversPage = new HoversPage()
    hoversPage.hoverOverElement()
})
})