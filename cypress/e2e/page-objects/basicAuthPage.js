const user ='#ba_username'
const password ='#ba_password'
const loginButton='button[onclick="onLoginSubmit()"]'
const loginMessage='#loginFormMessage'

class BasicAuthPage{

    checkBasicAuthoNegative(){

        cy.get(user).type('Kara')
        cy.get(password).type('karatest')

        cy.get(loginButton).click()
        cy.get(loginMessage).should('have.text','Invalid credentials')

    }

}
export default  BasicAuthPage