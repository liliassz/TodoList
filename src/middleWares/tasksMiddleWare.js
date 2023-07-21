// Middleware para validar o corpo da requisição ao criar uma nova tarefa
const validateBody = (req, res, next) => {
    // Obter o corpo da requisição enviado pelo cliente
    const { body } = req;

    // Verificar se o campo "title" está presente no corpo da requisição
    if (body.title === undefined || body.title === '') {
        // Se o campo "title" estiver ausente ou vazio, retornar uma resposta de erro com status 400 (Bad Request)
        return res.status(400).json({
            message: 'O campo "title" é obrigatório.'
        });
    }

    // Se a validação passar, chamar o próximo middleware
    next();
};

// Middleware para validar o corpo da requisição ao atualizar uma tarefa existente
const validateUpdate = (req, res, next) => {
    // Obter o corpo da requisição enviado pelo cliente
    const { body } = req;

    // Verificar se o campo "id" ou "created_at" está presente no corpo da requisição
    if (body.id || body.id === '' || body.created_at || body.created_at === '') {
        // Se o campo "id" ou "created_at" estiverem presentes ou vazios, retornar uma resposta de erro com status 400 (Bad Request)
        return res.status(400).json({
            message: 'O Id não pode ser alterado. A data não pode ser modificada.'
        });
    }

    // Verificar se o campo "status" está presente no corpo da requisição
    if (body.status === undefined || body.status === '') {
        // Se o campo "status" estiver ausente ou vazio, retornar uma resposta de erro com status 400 (Bad Request)
        return res.status(400).json({
            message: 'O campo "status" é obrigatório.'
        });
    }

    // Verificar se o campo "title" está presente no corpo da requisição
    if (body.title === undefined || body.title === '') {
        // Se o campo "title" estiver ausente ou vazio, retornar uma resposta de erro com status 400 (Bad Request)
        return res.status(400).json({
            message: 'O campo "title" é obrigatório.'
        });
    }

    // Se a validação passar, chamar o próximo middleware ou rota no pipeline
    next();
};

// Exportar as funções de middleware para serem utilizadas nas rotas
module.exports = {
    validateBody,
    validateUpdate
};
 