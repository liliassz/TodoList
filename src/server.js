const express = require('express');
const app = require('./app')
;
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor ligado na porta: ${PORT}`));

app.use(express.static('public'));
