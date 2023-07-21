// Importar o modelo de tarefas (tasksModel) para interagir com o banco de dados
const tasksModel = require('../models/tasksModel');

// Função assíncrona para obter todas as tarefas do banco de dados
const getAll = async (req, res) => {
    try {
        // Chamar a função getAll() do modelo de tarefas para buscar todas as tarefas no banco de dados
        const tasks = await tasksModel.getAll();

        // Retornar as tarefas em formato JSON com status 200 (OK)
        return res.status(200).json(tasks);
    } catch (error) {
        // Em caso de erro, retornar uma resposta com status 500 (Erro interno do servidor)
        return res.status(500).json({ error: 'Erro ao buscar as tarefas.' });
    }
};

// Função assíncrona para criar uma nova tarefa no banco de dados
const createTask = async (req, res) => {
    try {
        // Extrair o corpo da requisição (contendo os dados da nova tarefa)
        const taskData = req.body;

        // Chamar a função createTask() do modelo de tarefas para criar a nova tarefa no banco de dados
        const createdTask = await tasksModel.createTask(taskData);

        // Retornar a nova tarefa criada em formato JSON com status 201 (Criado)
        return res.status(201).json(createdTask);
    } catch (error) {
        // Em caso de erro, retornar uma resposta com status 500 (Erro interno do servidor)
        return res.status(500).json({ error: 'Erro ao criar a tarefa.' });
    }
};

// Função assíncrona para excluir uma tarefa do banco de dados
const deleteTask = async (req, res) => {
    try {
        // Extrair o ID da tarefa da URL da requisição
        const { id } = req.params;

        // Chamar a função deleteTask() do modelo de tarefas para excluir a tarefa no banco de dados
        await tasksModel.deleteTask(id);

        // Retornar uma resposta vazia com status 204 (Sem conteúdo) para indicar que a tarefa foi excluída com sucesso
        return res.status(204).json();
    } catch (error) {
        // Em caso de erro, retornar uma resposta com status 500 (Erro interno do servidor)
        return res.status(500).json({ error: 'Erro ao excluir a tarefa.' });
    }
};

// Função assíncrona para atualizar uma tarefa no banco de dados
const updateTask = async (req, res) => {
    try {
        // Extrair o ID da tarefa da URL da requisição
        const { id } = req.params;

        // Extrair os dados da tarefa a ser atualizada do corpo da requisição
        const taskData = req.body;

        // Chamar a função updateTask() do modelo de tarefas para atualizar a tarefa no banco de dados
        await tasksModel.updateTask(id, taskData);

        // Retornar uma resposta vazia com status 204 (Sem conteúdo) para indicar que a tarefa foi atualizada com sucesso
        return res.status(204).json();
    } catch (error) {
        // Em caso de erro, retornar uma resposta com status 500 (Erro interno do servidor)
        return res.status(500).json({ error: 'Erro ao atualizar a tarefa.' });
    }
};

// Exportar as funções para serem utilizadas nas rotas
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};
