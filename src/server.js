// Importa o pacote express para criar o aplicativo do servidor
const express = require('express');

// Importa o aplicativo de roteamento (app) definido no arquivo app.js
const app = require('./app');

// Importa o pacote dotenv para carregar variáveis de ambiente a partir de um arquivo .env
require('dotenv').config();

// Obtém a porta do servidor a partir das variáveis de ambiente
const PORT = process.env.PORT;
 
// Define a pasta 'public' como a pasta de arquivos estáticos usando o middleware express.static.
// Isso permite que o servidor sirva os arquivos estáticos (como index.html, styles.css, etc.) localizados na pasta 'public' para o cliente.
app.use(express.static('public'));

// Inicia o servidor express para escutar na porta especificada
app.listen(PORT, () => console.log(`Servidor ligado na porta: ${PORT}`));
