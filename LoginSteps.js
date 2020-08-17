
/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site Trello", () => {
    loginPage.acessarSite();
})

//When("acesso a pagina de login", () => {
//    loginPage.clicarBotaoPaginaLogin();
//})

Then("devo visualizar o link não conseguiu entrar", () => {
    loginPage.visualizarLinkNaoConseguiuEntrar();
})