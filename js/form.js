        //form.html
      function buscarEndereco() {
            var cep = document.getElementById('cep').value.replace(/\D/g, '');

            $.getJSON('https://api.allorigins.win/get?url=https://viacep.com.br/ws/' + cep + '/json/', function(data) {
                var response = JSON.parse(data.contents);
                if (!response.erro) {
                    document.getElementById('endereco').value = response.logradouro;
                    document.getElementById('bairro').value = response.bairro;
                    document.getElementById('cidade').value = response.localidade;
                    document.getElementById('estado').value = response.uf;
                } else {
                    alert('CEP não encontrado.');
                }
            });
        }


        $(document).ready(function() {
            $('.form-control').on('change', function() {
                if ($(this).val()) {
                    $(this).addClass('filled');
                } else {
                    $(this).removeClass('filled');
                }
            });
        });

     




        function enviarDados() {
        var userData = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        nome_social: document.getElementById('nome_social').value,
        cpf: document.getElementById('cpf').value,
            genero: document.getElementById('genero').value,
        data_nasc: document.getElementById('data_nasc').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        password: document.getElementById('password').value
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao enviar dados. Tente novamente mais tarde.');
    });
}

