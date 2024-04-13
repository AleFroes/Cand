// Array para armazenar os itens
let items = [];

// Função para adicionar um item ao estoque
function adicionarItem() {
    var productName = document.getElementById('productName').value;
    var productQuantity = document.getElementById('productQuantity').value;
    var productUnit = document.getElementById('productUnit').value;
    var productPrice = document.getElementById('productPrice').value;

    // Adicionar o item ao array
    items.push({
        productName: productName,
        productQuantity: productQuantity,
        productUnit: productUnit,
        productPrice: parseFloat(productPrice)
    });

    // Atualizar a tabela
    atualizarTabela();

    // Atualizar o valor total do estoque
    atualizarTotalEstoque();

    // Limpar os campos do formulário
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
            <td>${(item.productPrice / item.productQuantity).toFixed(2)}</td>
            <td>Limite do Estoque</td>
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

    // Remover o item da lista para evitar duplicatas
    items.splice(index, 1);

    // Atualizar a tabela após remover o item da lista
    atualizarTabela();

    // Atualizar o valor total do estoque
    atualizarTotalEstoque();
}

// Função para remover um item
function removerItem(index) {
    items.splice(index, 1);
    atualizarTabela();
    atualizarTotalEstoque();
}

// Função para atualizar o valor total do estoque
function atualizarTotalEstoque() {
    const totalStockValue = items.reduce((total, item) => total + item.productPrice, 0).toFixed(2);
    document.getElementById('totalStockValue').textContent = totalStockValue;
}

// Função para executar ações
function executarAcoes() {
    sair();
    fecharPagina();
    deslogar();
}

// Função para sair do sistema
function sair() {
    alert("Você saiu do sistema.");
}

// Função para fechar a página
function fecharPagina() {
    window.close();
}

// Função para deslogar
function deslogar() {
    alert("Você foi deslogado.");
}