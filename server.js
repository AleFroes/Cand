const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const clusterUrl = process.env.MONGO_URL;
const databaseName = process.env.MONGO_DATA;

// Usando o middleware Morgan com o formato 'dev'
app.use(morgan('dev'));

// Configurando o middleware para analisar corpos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectando ao MongoDB (substitua "minha_base_de_dados" pelo seu URL do MongoDB)
mongoose.connect('mongodb+srv://${username}:${password}@${clusterUrl}/?retryWrites=true&w=majority&appName=${databaseName}');

// Definindo o esquema do MongoDB para os usuários
const usuarioSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    nome_social: String,
    cpf: String,
    genero: String,
    data_nasc: String,
    tel: String,
    email: String,
    cep: String,
    endereco: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    password: String,
    aceitar_termo: Boolean
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Rota para enviar dados
app.post('/enviar-dados', (req, res) => {
    const userData = req.body;

    const usuario = new Usuario(userData);
    usuario.save()
        .then(() => {
            res.status(200).json({ message: 'Dados salvos com sucesso!' });
        })
        .catch((error) => {
            console.error('Erro ao enviar dados:', error);
            res.status(500).json({ error: 'Erro ao enviar dados' });
        });
});

// Rota para deletar dados
app.delete('/deletar-dados/:id', (req, res) => {
    const usuarioId = req.params.id;

    Usuario.findByIdAndDelete(usuarioId)
        .then(() => {
            res.status(200).json({ message: 'Dados deletados com sucesso!' });
        })
        .catch((error) => {
            console.error('Erro ao deletar dados:', error);
            res.status(500).json({ error: 'Erro ao deletar dados' });
        });
});

// Rota para editar dados
app.put('/editar-dados/:id', (req, res) => {
    const usuarioId = req.params.id;
    const userData = req.body;

    Usuario.findByIdAndUpdate(usuarioId, userData)
        .then(() => {
            res.status(200).json({ message: 'Dados editados com sucesso!' });
        })
        .catch((error) => {
            console.error('Erro ao editar dados:', error);
            res.status(500).json({ error: 'Erro ao editar dados' });
        });
});

// Adicione outros campos conforme necessário

// Rota para fazer login de usuário
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ email, password });
        if (usuario) {
            res.status(200).json({ message: 'Login de usuário bem-sucedido' });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login de usuário' });
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
        res.status(500).json({ error: 'Erro ao fazer login de administrador' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
