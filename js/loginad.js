     function validateForm() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Aqui você pode adicionar lógica para validar o nome de usuário e senha.
      // Por exemplo, você pode compará-los com valores armazenados em um banco de dados.

      if (username === "admin" && password === "admin") {
        alert("Login bem-sucedido!");
        window.location.href = "admin.html"; // Redireciona para admin.html
        return false; // Impede o envio do formulário padrão
      } else {
        alert("Nome de usuário ou senha incorretos.");
        return false;
      }
    }



