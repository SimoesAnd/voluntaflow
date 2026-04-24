const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importando a conexão com o banco de dados
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// --- ROTAS DA API ---

// 1. Rota de teste da API
app.get('/', (req, res) => {
  res.json({ message: '🌊 API do VoluntaFlow está online!' });
});

// 2. Rota para CADASTRAR um novo voluntário (POST)
app.post('/api/voluntarios', async (req, res) => {
  // RADAR LIGADO: Mostra no terminal o que chegou do Front-end
  console.log("⚠️ DADOS QUE CHEGARAM NO BACK-END:", req.body);

  const { nome, email, telefone, estado, habilidade } = req.body;

  try {
    const novoVoluntario = await pool.query(
      'INSERT INTO voluntarios (nome, email, telefone, estado, habilidade) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, email, telefone, estado, habilidade]
    );

    console.log("✅ SALVO NO BANCO COM SUCESSO!", novoVoluntario.rows[0]);
    res.status(201).json(novoVoluntario.rows[0]);
  } catch (err) {
    console.error("❌ ERRO AO SALVAR NO BANCO:", err.message);
    res.status(500).json({ error: 'Erro ao cadastrar voluntário. Verifique se o e-mail já existe.' });
  }
});

// 3. Rota para LISTAR todos os voluntários (GET)
app.get('/api/voluntarios', async (req, res) => {
  try {
    const todosVoluntarios = await pool.query('SELECT * FROM voluntarios ORDER BY data_cadastro DESC');
    res.json(todosVoluntarios.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erro ao buscar voluntários.' });
  }
});

// 4. Rota de LOGIN para Administradores (POST)
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Procura se existe algum admin com esse e-mail
    const result = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);

    // Se não encontrou ninguém
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'E-mail não autorizado.' });
    }

    const admin = result.rows[0];

    // Verifica se a senha bate
    if (admin.senha !== senha) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    // Deu tudo certo! Libera a entrada devolvendo os dados do usuário (sem a senha)
    res.json({ 
      success: true, 
      user: { id: admin.id, nome: admin.nome, email: admin.email } 
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erro no servidor ao tentar logar.' });
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});