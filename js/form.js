$(document).ready(function() {
    $('#enviar-btn').click(function(event) {
        event.preventDefault(); // Evita o envio do formulário para recarregar a página

        // Validar o checkbox de aceitar termos quando o formulário for enviado
        var checkboxValido = validarCheckbox();

        if (!checkboxValido) {
            return;
        }

        // Obter os valores dos campos do formulário
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();
        var nome_social = $('#nome_social').val();
        var cpf = $('#cpf').val();
        var genero = $('#genero').val();
        var data_nasc = $('#data_nasc').val();
        var tel = $('#tel').val();
        var email = $('#email').val();
        var cep = $('#cep').val();
        var endereco = $('#endereco').val();
        var numero = $('#numero').val();
        var complemento = $('#complemento').val();
        var bairro = $('#bairro').val();
        var cidade = $('#cidade').val();
        var estado = $('#estado').val();

        // Verificar se todos os campos obrigatórios estão preenchidos
        if (!nome || !sobrenome || !nome_social || !cpf || !genero || !data_nasc || !tel || !email || !cep || !endereco || !numero || !complemento || !bairro || !cidade || !estado) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Criar objeto com os dados do usuário
        var userData = {
            nome: nome,
            sobrenome: sobrenome,
            nome_social: nome_social,
            cpf: cpf,
            genero: genero,
            data_nasc: data_nasc,
            tel: tel,
            email: email,
            cep: cep,
            endereco: endereco,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        };

        // Enviar os dados para o servidor Node.js via AJAX
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/enviar-dados',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                alert('Dados enviados com sucesso!');
                // Redirecionar para outra página após o envio dos dados, se necessário
                window.location.href = 'order.html';
            },
            error: function(xhr, status, error) {
                alert('Erro ao enviar dados: ' + error);
            }
        });
    });

    function validarCheckbox() {
        var checkbox = $('#aceitar_termos');
        if (!checkbox.prop('checked')) {
            alert('Por favor, marque o checkbox para aceitar os termos de serviço e política de privacidade.');
            return false;
        }
        return true;
    }
});
