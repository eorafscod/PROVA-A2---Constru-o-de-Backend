# PROVA-A2---Construção-de-Backend

## Projeto Netflix

### Histórico de Desenvolvimento

#### Data: 27-05 manhã 
- **Início ao projeto Netflix**
  - Configuração inicial do projeto
  - Configuração do ambiente de desenvolvimento
  - Criação da estrutura de diretórios
  - Criação do diagrama

#### Data: 27-05 tarde
- **Conexão com o Banco de Dados**
  - **Objetivo:** Configurar a conexão com o banco de dados MongoDB.
  - Criação da configuração de conexão em `database/connection.js`
  - **Status:** Funcional

  - **Autenticação**
  - **Objetivo:** Implementar autenticação de usuário.
  - Criação do controlador `authController.js`
  - Criação do middleware `authMiddleware.js`
  - Criação das rotas de autenticação em `routes/autenticacao.routes.js`
  - **Status:** Em teste

#### Data: 28-05
- **Usuário**
  - **Objetivo:** Implementar o CRUD para a entidade Usuário.
  - Criação do modelo `usuario.js`
  - Criação do controlador `usuarioController.js`
    - Criação do validators `usuariovalidator.js`
  - Testes das rotas utilizando Postman
  - **Status:** Funcional

#### Data: 28-05
- **Gênero**
  - **Objetivo:** Implementar o CRUD para a entidade Gênero.
  - Criação do modelo `genero.js`
  - Criação do controlador `generoController.js`
  - Testes das rotas utilizando Postman
  - **Status:** Funcional

  