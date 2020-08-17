Feature: Login site Trello

//    Scenario: Realizar login
//        Given acesso o site Trello
//        When acesso a pagina de login
//        When clico em fazer login
//          When informo endereco de email
//          When informo senha
//          When clico no botao fazer login
//        Then devo visualizar o menu Quadros

    Scenario: Visualizar opção não conseguiu entrar?
        Given acesso o site Trello
        When acesso a pagina de login
        Then devo visualizar o link não conseguiu entrar
