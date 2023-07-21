// Importa o pacote express para criar o módulo de roteamento
const express = require('express');
// Importa o controlador das tarefas (tasksController) para tratar as requisições relacionadas às tarefas
const taksController = require('./controllers/tasksController');
// Importa o middleware para validação do corpo da requisição (tasksMiddleWare)
const tasksMiddleWare = require('./middleWares/tasksMiddleWare');

// Cria o módulo de roteamento do express
const router = express.Router();

// Define a rota GET para obter todas as tarefas
router.get('/tasks', taksController.getAll);
// Define a rota POST para criar uma nova tarefa, utilizando o middleware para validar o corpo da requisição antes de chamar o controlador
router.post('/tasks', tasksMiddleWare.validateBody, taksController.createTask);
// Define a rota DELETE para excluir uma tarefa com base em seu ID
router.delete('/tasks/:id', taksController.deleteTask);
// Define a rota PUT para atualizar uma tarefa existente com base em seu ID, utilizando o middleware para validar o corpo da requisição antes de chamar o controlador
router.put('/tasks/:id', tasksMiddleWare.validateUpdate, taksController.updateTask);

// Exporta o módulo de roteamento para ser utilizado pelo aplicativo express
module.exports = router;
