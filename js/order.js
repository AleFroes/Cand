      //order.html
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
  
         function validarPedido() {
        var tipo = document.getElementById('tipo').value;
        var massa = document.getElementById('massa').value;
        var recheio = document.getElementById('recheio').value;
        var decoracao = document.getElementById('decoracao').value;
        var peso = document.getElementById('peso').value;
        var data_entrega = document.getElementById('data_entrega').value;
        var hora_entrega = document.getElementById('hora_entrega').value;
        var mensagem = document.getElementById('mensagem').value;

        if (tipo === "" || massa === "" || recheio === "" || decoracao === "" || peso === "" || data_entrega === "" || hora_entrega === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos do formulário antes de prosseguir.");
        } else {
            window.location.href = "payment.html";
        }
    }

        // Adicione aqui o script para abrir o chatbot quando o botão for clicado
        document.getElementById("chatbot-button").addEventListener("click", function() {
            // Adicione o código para abrir o chatbot aqui
            alert("Abrir o chatbot...");
        });


