# PROVA-A2---Construção-de-Backend

## Projeto Netflix

### Histórico de Desenvolvimento

#### Data: 26-05 manhã 
- **Início ao projeto Netflix**
  - Configuração inicial do projeto
  - Configuração do ambiente de desenvolvimento
  - Criação da estrutura de diretórios
  - Criação do diagrama

#### Data: 26-05 tarde
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

#### Data: 27-05
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

#### Data: 28-05
- **Filme**
  - **Objetivo:** Implementar o CRUD para a entidade Filme e adicionar múltiplos gêneros a um filme.
  - Criação do modelo `filme.js`
  - Criação do controlador `filmeController.js`
  - Atualização do README.md com o progresso detalhado
  - **Status:** Funcional

  #### Data: 28-05
- **Série**
  - **Objetivo:** Implementar o CRUD para a entidade Série e adicionar múltiplos gêneros a uma série.
  - Criação do modelo `serie.js`
  - Criação do controlador `serieController.js`
  - Atualização do README.md com o progresso detalhado
  - **Status:** Em andamento