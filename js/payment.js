
        var urlParams = new URLSearchParams(window.location.search);
        var nome = urlParams.get('nome');
        var sobrenome = urlParams.get('sobrenome');
        var endereco = urlParams.get('endereco');
        var numero = urlParams.get('numero');
        var tel = urlParams.get('tel');
        var tipo = urlParams.get('tipo');
        var massa = urlParams.get('massa');
        var recheio = urlParams.get('recheio');
        var decoracao = urlParams.get('decoracao');
        var mensagem = urlParams.get('mensagem');
        var data_entrega = urlParams.get('data_entrega');
        var hora_entrega = urlParams.get('hora_entrega');
        document.getElementById('nome').innerText = nome;
        document.getElementById('sobrenome').innerText = sobrenome;
        document.getElementById('endereco').innerText = endereco;
        document.getElementById('numero').innerText = numero;
        document.getElementById('tel').innerText = tel;
        document.getElementById('tipo').innerText = tipo;
        document.getElementById('massa').innerText = massa;
        document.getElementById('recheio').innerText = recheio;
        document.getElementById('decoracao').innerText = decoracao;
        document.getElementById('mensagem').innerText = mensagem;
        document.getElementById('data_entrega').innerText = data_entrega;
        document.getElementById('hora_entrega').innerText = hora_entrega;
  
  
     
        function atualizarValor() {
        // Obtém o select
        var select = document.getElementById("tipo");
        // Obtém o valor selecionado
        var selectedOption = select.options[select.selectedIndex].value;
        // Divide o valor selecionado para obter apenas o preço
        var preco = selectedOption.split(',')[1];
        // Atualiza o valor no input
        document.getElementById("tipo_valor").value = "R$ " + preco;
        }
        // Chama a função para que o valor inicial seja exibido corretamente
        atualizarValor();
  
  
        // Função para calcular o total do pedido
        function calcularTotal() {
            var tipo = parseFloat(document.getElementById('tipo').value.split(',')[1]);
            var massa = parseFloat(document.getElementById('massa').value);
            var recheio = parseFloat(document.getElementById('recheio').value);
            var decoracao = parseFloat(document.getElementById('decoracao_valor_label').innerText.split(' ')[1]);
            var peso = parseFloat(document.getElementById('peso').value);
            var total = tipo + massa + recheio + decoracao + peso;
            document.getElementById('total').value = 'R$ ' + total.toFixed(2);
        }

     function processPayment() {
    const valor = document.getElementById('valor').value;
    const numeroCartao = document.getElementById('numeroCartao').value;
    const validadeCartao = document.getElementById('validadeCartao').value;
    const cvv = document.getElementById('cvv').value;
         
         // Verifica se o CVV é par
    const cvvPar = parseInt(cvv) % 2 === 0;


    fetch('/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            valor,
            cartao: {
                numero: numeroCartao,
                validade: validadeCartao,
                cvv
            }
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro ao processar pagamento. Por favor, tente novamente.');
        }
    })
    .then(data => {
        // Se o pagamento for bem-sucedido, redirecione para a página confirmation.html
        window.location.href = 'confirmation.html';
    })
    .catch(error => {
        console.error('Erro ao processar pagamento:', error.message);
        alert(error.message);
    });
}


        // Função para alternar entre os formulários de pagamento
        $('input[name="pagamento"]').change(function() {
            var selectedValue = $(this).val();
            if (selectedValue === 'pix') {
                $('#pix-form').show();
            } else {
                $('#pix-form').hide();
            }
        });

        // Função para gerar QR Code com a chave PIX
        function gerarQRCode(chavePix) {
            var qrCodeDiv = document.getElementById('qrcode');

            // Limpa qualquer conteúdo anterior
            qrCodeDiv.innerHTML = '';

            // Cria o QR Code com a chave PIX
            new QRCode(qrCodeDiv, {
                text: chavePix,
                width: 200,
                height: 200
            });
        }

        // Adiciona um evento de clique ao botão para gerar o QR Code
        var botaoGerarQRCode = document.getElementById('gerar-qrcode');
        botaoGerarQRCode.addEventListener('click', function() {
            // Substitua 'sua-chave-pix' pela chave PIX a ser usada
            var chavePix = 'sua-chave-pix';
            gerarQRCode(chavePix);
        });



