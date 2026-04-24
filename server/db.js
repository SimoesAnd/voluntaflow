const { Pool } = require('pg');
require('dotenv').config();

// Configurando a conexão usando as variáveis do .env
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Teste rápido para ver se a conexão funcionou ao iniciar
pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ Erro ao conectar no banco de dados:', err.stack);
  }
  console.log('✅ Conectado ao banco de dados PostgreSQL com sucesso!');
  release();
});

module.exports = pool;