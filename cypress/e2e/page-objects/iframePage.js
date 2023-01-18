
const button1= '#simpleButton1'
const iframe='iframe'
class IframePage{

    checkIframeVisible(){
        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then (cy.wrap)
   
        iframeTest.find(button1).click()

      



    
    }

    }
    



    
export default IframePage



