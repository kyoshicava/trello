
/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
   // clicarBotaoPaginaLogin() {
   //     cy.get(loginElements.botaoLogin()).click()
   // }
  
    // Verifica se o link tem o texto "Não conseguiu entrar?"
    visualizarLinkNaoConseguiuEntrar() {
        cy.get(loginElements.linkNaoConseguiuEntrar()).should('contain', 'Não conseguiu entrar?')
    }
}