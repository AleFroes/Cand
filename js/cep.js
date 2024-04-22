function buscarEnderecoPorCEP() {
  var cep = document.getElementById('cep').value;
  fetch('https://viacep.com.br/ws/' + cep + '/json/')
    .then(response => response.json())
    .then(data => {
      if (!data.erro) {
        document.getElementById('endereco').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;
      } else {
        alert('CEP não encontrado. Por favor, verifique o CEP digitado.');
      }
    })
    .catch(error => {
      console.error('Erro ao buscar endereço:', error);
    });
}