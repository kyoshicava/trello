Plano de Testes

Suíte de teste: Validar funcionalidade de login
Casos de Teste:
	→ Validar quantidade de caracteres permitido nos campos inserir e-mail e senha
	→ Validar comportamento do sistema ao tentar realizar login sem informar campos inserir e-mail e senha
	→ Validar mensagens de retorno ao tentar logar com: e-mail inválido e senha incorreta, e-mail inválido e senha correta, e-mail válido e senha incorreta
	→ Validar realização de login com sucesso
	
Suíte de teste: Validar funcionalidade de recuperação de senha
Casos de Teste:	
	→ Validar campo insira o e-mail informando um endereço de e-mail com formato inválido
	→ Validar comportamento do sistema ao tentar enviar link de recuperação para e-mail não cadastrado no Trello
	→ Validar o envio de link de recuperação ao informar e-mail válido cadastrado no Trello
	
Suíte de teste: Validar funcionalidade de criar novo quadro
Casos de Teste:	
	→ Validar a apresentação do novo quadro com o campo para inserir o titulo e opções de privacidade, escolha de modelo e design
	→ Validar quantidade de caracteres permitido no campo inserir titulo
	→ Validar se o campo inserir titulo aceitar todos caracteres permitido, entre letras/números e caracteres especiais
	→ Validar a criação do quadro ao informar titulo do quadro e clicar no botão Criar Quadro
	
Suíte de teste: Validar funcionalidade listas
Casos de Teste:
	→ Validar a criação da lista ao informar titulo da lista e clicar no botão Adicionar Lista
	→ Validar limite de criação de listas
	→ Validar edição de titulo de uma lista já criada
	→ Validar a opção de copiar lista
	→ Validar a opção de mover lista
	→ Validar o arquivamento da lista
	
Suíte de teste: Validar funcionalidade cartão
Casos de Teste:
	→ Validar a criação de cartão ao inserir titulo do cartão e clicar no botão Adicionar Cartão
	→ Validar a edição de titulo de um cartão já criado
	→ Validar as ações do cartão:
		- copiar cartão
		- mover cartão
		- arquivar cartão
		- seguir cartão
	→ Validar as opções adicionais do cartão:
		- adicionar membros
		- etiquetas
		- data entrega
		- checklist
		- data de entrega
		- anexo
	→ Validar a inclusão da descrição no cartão ao preencher campo Descrição e clicar no botão salvar
	→ Validar a inclusão de atividade no cartão ao preencher campo Atividade e clicar no botão salvar 
