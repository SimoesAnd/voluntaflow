# ⚙️ VoluntaFlow - API Server

O motor do VoluntaFlow, responsável por processar dados, gerenciar a segurança e persistir informações no PostgreSQL.

## 📡 Endpoints Principais

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/api/voluntarios` | Cadastra um novo voluntário. |
| **POST** | `/api/login` | Autenticação de administradores. |
| **GET** | `/api/voluntarios` | Lista voluntários (Protegido por Auth). |

## 🗄️ Modelo de Dados (SQL)

```sql
CREATE TABLE voluntarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    habilidade VARCHAR(50) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔐 Variáveis de Ambiente
Crie um arquivo .env na raiz desta pasta com as seguintes chaves:

PORT=3001
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=seu_host_neon
DB_PORT=5432
DB_NAME=neondb

## 🛠️ Tecnologias
Node.js & Express

pg (PostgreSQL client)

CORS (Segurança de requisições cross-origin)

Dotenv (Gestão de ambiente)
