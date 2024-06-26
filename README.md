Projeto - Criação de página web de confeitaria.

Documentação da página web (HTML) da Confeitaria 
Este documento tem como propósito descrever as páginas e a função dos principais elementos do código 
•	[Index.html – Este é um documento HTML para um site de confeitaria. Ele apresenta várias seções relacionadas à história, missão, valores, produtos e navegação.

- **História:** Esta seção conta a história da confeitaria desde seu início em 2005, descrevendo suas origens e como ela se desenvolveu ao longo do tempo.

- **Missão:** Aqui é apresentada a missão da confeitaria, que é criar bolos e doces deliciosos para encantar os clientes. Isso destaca o foco da empresa na qualidade e na satisfação do cliente.

- **Valores:** Nesta seção são listados os valores fundamentais da confeitaria, incluindo qualidade, comprometimento e criatividade. Isso demonstra os princípios pelos quais a empresa se guia em seu trabalho.

- **Produtos:** Esta seção oferece uma visão geral dos produtos da confeitaria, embora não contenha informações detalhadas sobre eles. Os usuários podem esperar encontrar fotos de trabalhos realizados e talvez uma descrição breve.

- **Navegação:** O menu de navegação permite aos usuários acessarem rapidamente as diferentes seções do site, incluindo História, Missão, Valores, Produtos, Cadastro e Pedido, e Acesso Restrito.

O estilo do site é projetado para ser atraente e funcional, com um fundo de gradiente colorido, uma barra de navegação lateral (sidebar) e um layout responsivo para diferentes tamanhos de tela. A ênfase é colocada na legibilidade e na facilidade de uso para garantir uma experiência agradável para os visitantes do site.



•	Form.html – Este é um documento HTML, formulário de cadastro. Ele permite aos usuários inserirem informações pessoais e endereço para fazer o cadastro no site. Ele também possui um link para o caso do usuário já ter um cadastro, este link o levará para uma tela onde ele deverá inserir o email e senha para ter acesso a página de pedido.

- **Cadastro:** Nesta seção, os usuários podem preencher um formulário com informações pessoais, incluindo nome, sobrenome, data de nascimento, telefone e e-mail. Há também campos para inserir o CEP, que será usado para buscar automaticamente, através de API, o endereço completo do usuário.

- **Busca de Endereço:** Ao preencher o campo de CEP, o sistema busca automaticamente o endereço correspondente utilizando a API do ViaCEP. O endereço encontrado é exibido nos campos de endereço, bairro, cidade e estado.

- **Envio de Dados:** Após preencher todos os campos obrigatórios, os usuários podem clicar no botão “Enviar Dados” para submeter o formulário. Não há uma ação definida para este botão neste código, mas geralmente seria usado para enviar os dados para um servidor para processamento.


•	Order.html – Este é um documento HTML para uma página de pedido em um site de confeitaria. Ele permite aos usuários montarem seus próprios bolos e fazerem pedidos personalizados.

- **Opções de Escolha do Bolo:** Os usuários podem escolher entre diferentes tipos de bolos, como bolo de andar e bolos tradicionais.

- **Escolha da Massa:** Os usuários podem escolher entre massa de baunilha ou chocolate para o bolo.

- **Escolha do Recheio:** Os usuários podem escolher entre uma variedade de recheios, como abacaxi, brigadeiro, e outros.

- **Decoração Personalizada:** Os usuários podem digitar uma mensagem para personalizar a decoração/tema do bolo.

- **Peso do Bolo:** Os usuários podem especificar o peso do bolo em quilogramas.
- Cada opção é dividida por seção (container), foi adicionado a função scroll para o usuário passar as opções ou aguardar o tempo pré definido de 10s para passar automaticamente.

- **Data e Hora da Entrega:** Os usuários podem selecionar a data e hora desejadas para a entrega do bolo.

-  **Carrinho** Ao escolher o item desejado ele é adicionado ao carrinho que está na parte inferior da página.

- **Exibição do Total do Pedido:** O total do pedido é calculado dinamicamente com base nas escolhas feitas pelos usuários e exibido para revisão antes de finalizar o pedido.
•	
•	L- **Botão de Envio do Pedido:** Após preencher todos os campos obrigatórios, os usuários podem clicar no botão “Pagar” para submeter o pedido, o usuário e redirecionado a página de pagamento Mercado Pago.

•	Loginad.html (Acesso Restrito) – Este é um documento HTML para uma página de login em um site. Ele permite que os usuários insiram um nome de usuário e senha para acessar áreas restritas do site.

- **Formulário de Login:** Os usuários podem inserir um nome de usuário e senha nos campos de entrada fornecidos.

- **Validação do Formulário:** Quando o formulário é enviado, a função `validateForm()` é chamada para validar o nome de usuário e senha inseridos. Neste exemplo, se o nome de usuário for “admin” e a senha for “admin”, o usuário é redirecionado para a página admin.html. Caso contrário, uma mensagem de erro é exibida.

- **Estilo e Design:** A página possui um layout simples e responsivo, com um fundo de gradiente colorido e uma caixa de login centralizada. Os campos de entrada e botão de login são estilizados para serem atraentes e fáceis de usar.

- **Segurança:** É importante observar que este exemplo de código é apenas um exemplo e não inclui recursos de segurança robustos, como criptografia de senha ou proteção contra ataques de força bruta. Em um ambiente de produção, medidas adicionais de segurança devem ser implementadas para proteger as informações confidenciais dos usuários.

O estilo da página inclui um fundo de gradiente colorido e uma caixa de login centralizada com bordas arredondadas.


•	Estoque.html – Ele permite que os usuários adicionem itens ao estoque, visualizem os itens existentes, editem e removam itens, e também definam um limite de estoque para cada item.

- **Formulário de Adição de Item:** Os usuários podem inserir informações sobre um novo item, incluindo o nome do produto, quantidade e preço. Ao clicar no botão “Adicionar Item”, o item é adicionado à lista de itens.

- **Tabela de Itens:** Abaixo do formulário de adição de item, há uma tabela que exibe os itens existentes no estoque. Para cada item, são exibidos o nome do produto, quantidade, unidade de medida, preço do produto, preço (valor/quantidade), botões de edição e remoção.

- **Botões de Edição e Remoção:** Cada item na tabela possui botões de edição e remoção, que permitem ao usuário editar as informações do item ou removê-lo do estoque.


- **Total do Estoque:** No final da página, há uma seção que exibe o valor total do estoque, calculado somando os preços de todos os itens no estoque.
