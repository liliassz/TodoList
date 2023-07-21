// Importa o módulo de conexão ao banco de dados
const connection = require('./connection');

// Função assíncrona que obtém todas as tarefas do banco de dados
const getAll = async () => {
    // Executa a consulta SQL para selecionar todas as tarefas na tabela 'tasks'
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    // Retorna o resultado da consulta, contendo todas as tarefas
    return tasks;
};

// Função assíncrona que cria uma nova tarefa no banco de dados
const createTask = async (task) => {
    // Extrai o campo 'title' do objeto task recebido como parâmetro
    const { title } = task;

    // Obtém a data atual em formato UTC
    const dateUTC = new Date(Date.now()).toUTCString();

    // Query SQL para inserir uma nova tarefa na tabela 'tasks' com o status 'pendente' e a data de criação
    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)';
    // Executa a query, inserindo a nova tarefa no banco de dados
    const [createTaskResult] = await connection.execute(query, [title, 'pendente', dateUTC]);

    // Retorna o ID da tarefa recém-criada
    return { insertId: createTaskResult.insertId };
};

// Função assíncrona que remove uma tarefa do banco de dados com base no seu ID
const deleteTask = async (id) => {
    // Executa a consulta SQL para excluir a tarefa com o ID fornecido
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);

    // Retorna o resultado da operação de exclusão da tarefa
    return removedTask;
}; 

// Função assíncrona que atualiza uma tarefa existente no banco de dados
const updateTask = async (id, task) => {
    // Extrai os campos 'title' e 'status' do objeto task recebido como parâmetro
    const { title, status } = task;

    // Query SQL para atualizar a tarefa com os novos valores de título e status com base no ID fornecido
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    // Executa a query, atualizando a tarefa no banco de dados
    const [updateTaskResult] = await connection.execute(query, [title, status, id]);

    // Retorna o resultado da operação de atualização da tarefa
    return updateTaskResult;
};

// Exporta as funções do módulo para serem utilizadas em outros módulos do projeto
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};
