const express = require('express');
const taksController = require('./controllers/tasksController');
const tasksMiddleWare = require('./middleWares/tasksMiddleWare')

const router = express.Router(); // Correção: use express.Router() com "R" maiúsculo

router.get('/tasks', taksController.getAll);
router.post('/tasks', tasksMiddleWare.validateBody, taksController.createTask);
router.delete('/tasks/:id', taksController.deleteTask);
router.put('/tasks/:id', tasksMiddleWare.validateUpdate, taksController.updateTask);

module.exports = router;
