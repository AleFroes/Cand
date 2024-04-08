        //stock.html
        // Array para armazenar os itens
    let items = [];

   // scripts.js

// Função para adicionar um item ao estoque
function adicionarItem() {
    var productName = document.getElementById('productName').value;
    var productQuantity = document.getElementById('productQuantity').value;
    var productUnit = document.getElementById('productUnit').value;
    var productPrice = document.getElementById('productPrice').value;

    // Enviar os dados para o servidor
    fetch('http://localhost:3000/adicionar_item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productName: productName,
            productQuantity: productQuantity,
            productUnit: productUnit,
            productPrice: productPrice
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Atualizar a tabela
        if (data.success) {
            adicionarItemNaTabela(productName, productQuantity, productUnit, productPrice);
        }
    })
    .catch(error => {
        console.error('Erro ao adicionar item:', error);
    });
}

// Função para adicionar o item na tabela HTML
function adicionarItemNaTabela(productName, productQuantity, productUnit, productPrice) {
    var tableBody = document.querySelector('#itemList tbody');
    var newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productQuantity}</td>
        <td>${productUnit}</td>
        <td>${productPrice}</td>
        <td>${(productPrice / productQuantity).toFixed(2)}</td>
        <td>Limite do Estoque</td>
        <td>Editar</td>
        <td>Remover</td>
    `;
}


        // Atualiza o valor total do estoque
        atualizarTotalEstoque();

        // Atualiza a tabela de itens
        atualizarTabela();

        // Limpa os campos do formulário
        document.getElementById('productName').value = '';
        document.getElementById('productQuantity').value = '';
        document.getElementById('productUnit').value = 'unidade';
        document.getElementById('productPrice').value = '';
    }

    // Função para atualizar a tabela de itens
    function atualizarTabela() {
        const tbody = document.querySelector('#itemList tbody');
        tbody.innerHTML = '';

        items.forEach((item, index) => {
            const row = tbody.insertRow();
            row.innerHTML = `
                    <td>${item.productName}</td>
                    <td>${item.productQuantity}</td>
                    <td>${item.productUnit}</td>
                    <td>${item.productPrice.toFixed(2)}</td>
                    <td>${item.unitValue}</td>
                    <td><input type="number" id="limit${index}" onchange="atualizarLimite(${index})" value="${item.limit || ''}"></td>
                    <td><button onclick="editarItem(${index})" class="btn btn-edit">Editar</button></td>
                    <td><button onclick="removerItem(${index})" class="btn btn-remove">Remover</button></td>
                `;
        });
    }

    // Função para editar um item
function editarItem(index) {
    const item = items[index];
    document.getElementById('productName').value = item.productName;
    document.getElementById('productQuantity').value = item.productQuantity;
    document.getElementById('productUnit').value = item.productUnit;
    document.getElementById('productPrice').value = item.productPrice;

    // Atualiza o valor total do estoque
    atualizarTotalEstoque();

    // Remove o item da lista para evitar duplicatas
    items.splice(index, 1);

    // Atualiza a tabela após remover o item da lista
    atualizarTabela();
}


    // Função para remover um item
    function removerItem(index) {
        items.splice(index, 1);
        atualizarTabela();
    }

    // Função para atualizar o limite de estoque
    function atualizarLimite(index) {
        const limitValue = parseFloat(document.getElementById(`limit${index}`).value);
        items[index].limit = limitValue;
    }

    // Função para atualizar o valor total do estoque
    function atualizarTotalEstoque() {
        const totalStockValue = items.reduce((total, item) => total + (parseFloat(item.productPrice)), 0).toFixed(2);
        document.getElementById('totalStockValue').textContent = totalStockValue;
    }

    function executarAcoes() {
        sair();
        fecharPagina();
        deslogar();
    }

    function sair() {
        // Adicione aqui o código para sair do sistema
        alert("Você saiu do sistema.");
    }

    function fecharPagina() {
        // Adicione aqui o código para fechar a página
        window.close();
    }

    function deslogar() {
        // Adicione aqui o código para deslogar
        alert("Você foi deslogado.");
    }

