import HomePage from "./homePage"
import Urls from "./urls"

const status200='div>a[href="http://httpstat.us/200"]'


class StatusCodesPage{
    checkStatusCode200(){
    cy.get(status200).click()
    cy.request(status200).then((response) => {
        const body=JSON.stringify(response.body)   
        expect (response.status).to.eq(200)
    }
)}

}
export default StatusCodesPage