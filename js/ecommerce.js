
let carrinho = [];
let subtotal = 0;
let pesoSelecionado = 1; // Valor padrão para o peso

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(botao, produto, preco, quantidade, categoria) {
  // Desabilita todos os botões dentro da mesma categoria
  const botoes = document.querySelectorAll(`.botao-adicionar.${categoria}`);
  botoes.forEach(b => {
    if (b !== botao) {
      b.classList.add('disabled');
      b.disabled = true;
    }
  });

  // Verifica se o produto já foi adicionado ao carrinho
  const produtoJaAdicionado = carrinho.some(item => item.produto === produto);
  
  if (!produtoJaAdicionado) {
    carrinho.push({ produto, preco, quantidade });
    atualizarCarrinho();
    botao.disabled = true; // Desabilitar o botão após adicionar ao carrinho
    mostrarMensagem('Item adicionado ao carrinho!');
  } else {
    alert("Este produto já foi adicionado ao carrinho.");
  }

  // Exibe o botão de "Editar Pedido" se o carrinho tiver pelo menos um item
  if (carrinho.length > 0) {
    const editarPedidoBtn = document.getElementById('editarPedidoBtn');
    editarPedidoBtn.style.display = 'inline-block';
  }
}

// Função para calcular o subtotal e o total
function atualizarCarrinho() {
  const carrinhoElement = document.querySelector('#itens-carrinho tbody');
  carrinhoElement.innerHTML = '';

  subtotal = 0;

  carrinho.forEach(item => {
    const valorItem = item.preco * item.quantidade;
    carrinhoElement.innerHTML += `<tr><td>${item.produto}</td><td>R$ ${valorItem.toFixed(2)}</td></tr>`;
    subtotal += valorItem;
  });

  // Calcular o total com base no subtotal e no peso selecionado
  const total = subtotal * pesoSelecionado;

  // Atualiza o conteúdo do subtotal e do total
  document.getElementById('subtotal').textContent = `Subtotal: R$ ${subtotal.toFixed(2)}`;
  document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function escolherPeso(peso) {
    var pesoSelecionadoElementos = document.querySelectorAll('.pesoSelecionado');
    pesoSelecionadoElementos.forEach(function(elemento) {
        elemento.textContent = "Peso selecionado: " + peso;
    });
}

// Função para escolher o peso (unidade) e calcular o total
function escolherPeso(peso) {
  // Atualiza o peso selecionado
  pesoSelecionado = peso;
  document.getElementById('peso').textContent =  'Subtotal x ' + pesoSelecionado + " Kg " + " (Peso selecionado) " ;
  
 
  // Atualiza o carrinho com o novo peso
  atualizarCarrinho();
}




// Configure suas credenciais de API
const accessToken = '<%= process.env.API_MPAGO %>';

console.log('Inicializando Mercado Pago...');

// Adicione um evento de clique ao botão de pagamento
document.getElementById('checkout-btn').addEventListener('click', async function() {
    console.log('Botão de pagamento clicado.');

    try {
        // Crie a preferência de pagamento
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: JSON.stringify({
                items: carrinho.map(item => ({
                  title: item.produto,
                  unit_price: item.preco * pesoSelecionado, // Calcula o preço total do item
                  quantity: item.quantidade,
                })),
                total_amount: subtotal * pesoSelecionado, // Definir o total como o subtotal multiplicado pelo peso selecionado
                back_urls: {
                    success: 'https://alefroes.github.io/cand/sucesso',
                    failure: 'https://alefroes.github.io/cand/erro',
                    pending: 'https://alefroes.github.io/cand/pendente'
                }
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao criar preferência de pagamento');
        }

        const data = await response.json();

        // Redirecione o usuário para o checkout
        window.location.href = data.init_point;
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao processar seu pagamento. Por favor, tente novamente mais tarde.');
    }
});
