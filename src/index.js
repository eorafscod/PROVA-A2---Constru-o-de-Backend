const express = require('express');
const app = express();
const PORT = 3000;

require('dotenv').config();
const DBConect = require('./database/connection');
DBConect();

// Middleware para analisar JSON
app.use(express.json());

// Rotas de autenticação
const autenticacaoRoutes = require('./routes/autenticacao.routes');
app.use('/api/auth', autenticacaoRoutes);

// Rotas gerais
const routes = require('./routes/routes');
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
