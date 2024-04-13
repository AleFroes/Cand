const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Configurando o middleware para analisar corpos de requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectando ao MongoDB (substitua "minha_base_de_dados" pelo nome do seu banco de dados)
mongoose.connect('mongodb+srv://froesdatasci:Eq5rVMCxv7eI2xnt@confeitaria.fdgdzgh.mongodb.net/?retryWrites=true&w=majority&appName=Confeitaria', { useNewUrlParser: true, useUnifiedTopology: true });

// Definindo os esquemas do MongoDB para cada coleção
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    // Adicione outros campos conforme necessário
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

const adminSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    // Adicione outros campos conforme necessário
});
const Admin = mongoose.model('Admin', adminSchema);

// Rota para fazer login de usuário
app.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ email, senha });
        if (usuario) {
            res.status(200).json({ message: 'Login de usuário bem-sucedido' });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login de usuário', details: error });
    }
});

// Rota para fazer login de administrador
app.post('/loginad', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const admin = await Admin.findOne({ email, senha });
        if (admin) {
            res.status(200).json({ message: 'Login de administrador bem-sucedido' });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login de administrador', details: error });
    }
});

// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta 3000`);
});