import InputPage from "./page-objects/inputPage"
import HomePage from "./page-objects/homePage"
import CheckboxPage from "./page-objects/checkboxPage"
import DropdownListPage from "./page-objects/dropdownListPage"
import HoversPage from "./page-objects/hoversPage"
import BasicAuthPage from "./page-objects/basicAuthPage"
import BasicFormPage from "./page-objects/formPage"
import KeypressPage from "./page-objects/keypressPage"
import AddAndRemovePage from "./page-objects/removeAndAddPage"
import StatusCodesPage from "./page-objects/statusCodePage"
import IframePage from "./page-objects/iframePage"

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
    it('test basic authorization', function(){
        const homePage= new HomePage()
        homePage.clickAuthorizationTab()

        const basicAuthPage= new BasicAuthPage()
        basicAuthPage.checkBasicAuthoNegative()
    })
    it('test fill in the form', function(){
        const homePage= new HomePage()
        homePage.clickFormTab()

        const basicFormPage= new BasicFormPage()
        basicFormPage.checkFormSubmitPositive()


    })
    it('test fill in the keypress input', function(){
        const homePage= new HomePage()
        homePage.clickKeypressTab()

        const basicKeypressPage= new KeypressPage()
        basicKeypressPage.checkKeypressReaction()
    })

    it('test addins and removing element', function(){
        const homePage= new HomePage()
        homePage.clickRemoveAndAddTab()
    
        const addAndRemovePage= new AddAndRemovePage()
        addAndRemovePage.checkAddingElement()
        addAndRemovePage.checkDeletingElement()
    })
    it('test status code', function(){
        const homePage= new HomePage()
        homePage.clickStatusCodeTab()

        const statusCode= new StatusCodesPage()
        statusCode.checkStatusCode200()
    })

    it('testing iframe',function(){
        const homePage= new HomePage()
        homePage.clickIframeTabe()

        const iframe= new IframePage()
        iframe.checkIframeVisible()
        
})
})