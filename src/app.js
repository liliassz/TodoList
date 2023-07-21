// Importa o pacote express para criar o aplicativo do servidor
const express = require('express');
// Importa o pacote cors para habilitar a política de mesma origem
const cors = require('cors');
// Importa o módulo de rotas (router) que contém as rotas do aplicativo
const router = require('./router');

// Cria uma instância do aplicativo express
const app = express();

// Adiciona o middleware para o tratamento de requisições JSON
app.use(express.json());
 
// Adiciona o middleware cors para habilitar a política de mesma origem
app.use(cors());

// Adiciona o middleware de rotas ao aplicativo
app.use(router);

// Exporta o aplicativo para ser utilizado em outros módulos do projeto ou para iniciar o servidor
module.exports = app;
