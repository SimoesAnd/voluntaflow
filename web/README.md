# 🌊 VoluntaFlow

> **Orquestrando solidariedade e informação em situações de emergência.**

O **VoluntaFlow** é uma plataforma centralizadora desenvolvida como projeto final para o curso Fullstack da **VaiNaWeb**. O sistema nasceu da necessidade de organizar o fluxo de informações durante desastres climáticos, combatendo a dispersão de dados em redes sociais e facilitando o engajamento de voluntários de forma regionalizada e eficiente.

---

## 📌 1. Apresentação da Ideia

A ideia do VoluntaFlow surgiu da observação de como a desinformação e a fragmentação de dados prejudicam a ajuda humanitária durante enchentes no Brasil. Muitas vezes, a vontade de ajudar é imensa, mas a logística falha porque os dados não estão conectados. O nome "VoluntaFlow" reflete a intenção de criar um fluxo contínuo e organizado entre a informação do desastre e a ação do voluntário.

## 🧩 2. Problema Escolhido

Em cenários de enchentes, os maiores desafios são a comunicação e a logística. O projeto foca no **Caso 4 (Organização de Voluntários)**, atacando as seguintes dores:

- **Dispersão de Informação:** Dados sobre áreas afetadas ficam presos em grupos de mensagens ou redes sociais.
- **Sobrecarga em Locais Específicos:** Sem organização, alguns pontos recebem ajuda excessiva enquanto outros ficam desamparados.
- **Dificuldade de Cadastro:** Falta de um banco de dados centralizado que catalogue as habilidades específicas dos voluntários por região.

## 💡 3. Solução Proposta

O VoluntaFlow atua como uma ponte digital. A solução oferece:

1. **Dashboard Informativo:** Centraliza as notícias e o status de emergência de cada estado brasileiro, permitindo que o usuário entenda o cenário antes de agir.
2. **Hub de Voluntariado:** Um sistema de inscrição onde o usuário pode se candidatar para ajudar em estados específicos, informando sua disponibilidade e área de atuação (logística, limpeza, saúde, etc.).
3. **Filtragem por Estado:** Organiza os dados geograficamente para facilitar a atuação de defesas civis e ONGs locais.

## 🛠️ 4. Estrutura do Sistema

O projeto foi estruturado com uma stack moderna para garantir performance, acessibilidade e escalabilidade:

### Front-end
- **React & Next.js:** Para uma interface rápida, otimizada e com navegação fluida.
- **Tailwind CSS:** Estilização responsiva, garantindo que o site seja totalmente funcional em dispositivos móveis e desktops.
- **Acessibilidade:** Implementação de HTML semântico (uso correto de `<header>`, `<main>`, etc.) para garantir que a informação seja acessível a todos os usuários.

### Back-end
- **Node.js & Express:** Construção de uma API RESTful para gerenciar as requisições de dados e cadastros.
- **PostgreSQL:** Banco de dados relacional robusto para armazenar as informações dos voluntários e os registros de ocorrências por estado.

---

## 📈 Próximos Passos

O VoluntaFlow foi projetado para ser extensível. Futuras atualizações incluem:

- [ ] **Mapa Interativo:** Integração com APIs de mapas para visualização em tempo real dos pontos de inundação.
- [ ] **Sistema de Notificações:** Alertas sobre novas necessidades de voluntários em estados específicos.
- [ ] **Painel Administrativo:** Área restrita para que coordenadores de abrigos possam gerenciar os voluntários inscritos.

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone [https://github.com/seu-usuario/voluntaflow.git](https://github.com/seu-usuario/voluntaflow.git)
```

### 2. Configuração do Back-end (Server)
Acesse a pasta `/server` e instale as dependências:
```bash
cd server
npm install
```
- Crie um arquivo `.env` na raiz da pasta `server` com as credenciais do seu banco de dados PostgreSQL.
- Inicie o servidor:
```bash
npm run dev
```

### 3. Configuração do Front-end (Web)
Acesse a pasta `/web` e instale as dependências:
```bash
cd web
npm install
```
- Inicie a aplicação:
```bash
npm run dev
```

---

## 👤 Autor

**Andrews** Software Developer em formação pela VaiNaWeb.  
- [LinkedIn](https://linkedin.com/in/andrews-simoes)  
- [GitHub](https://github.com/simoesand)