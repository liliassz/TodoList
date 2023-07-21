// Importar o pacote dotenv para carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Definir a variável PORT obtendo seu valor do arquivo .env
const PORT = process.env.PORT;

// Obter referências para elementos HTML usando seletores
const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');

// Função assíncrona para buscar as tarefas da API usando fetch
const fetchTasks = async () => {
    try {
        const response = await fetch(`http://localhost:${PORT}/tasks`);
        const tasks = await response.json();
        return tasks;
    } catch (error) {
        console.error('Erro ao buscar as tarefas:', error);
        return [];
    }
};

// Função assíncrona para adicionar uma nova tarefa à API usando fetch
const addTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTask.value };

    try {
        await fetch(`http://localhost:${PORT}/tasks`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });

        // Após adicionar a tarefa, recarregar a lista de tarefas e limpar o campo de entrada
        loadTasks();
        inputTask.value = '';
    } catch (error) {
        console.error('Erro ao adicionar a tarefa:', error);
    }
};

// Função assíncrona para excluir uma tarefa da API usando fetch
const deleteTask = async (id) => {
    try {
        await fetch(`http://localhost:${PORT}/tasks/${id}`, {
            method: 'delete',
        });

        // Após excluir a tarefa, recarregar a lista de tarefas
        loadTasks();
    } catch (error) {
        console.error('Erro ao excluir a tarefa:', error);
    }
};

// Função assíncrona para atualizar uma tarefa da API usando fetch
const updateTask = async (task) => {
    const { id, title, status } = task;

    try {
        await fetch(`http://localhost:${PORT}/tasks/${id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, status }),
        });

        // Após atualizar a tarefa, recarregar a lista de tarefas
        loadTasks();
    } catch (error) {
        console.error('Erro ao atualizar a tarefa:', error);
    }
};
