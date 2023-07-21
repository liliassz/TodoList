const { response } = require("../app");

const validateBody = (req, res, next) => {
    const { body } = req;

    if(body.title == undefined){
        return res.status(400).json({
            message: 'O campo "title" é obrigatório.'
        })
    }else if(body.title == '') {
        return res.status(400).json({
            message: 'O campo "title" é obrigatório.'
        })
    }

    next()
};

const validateUpdate = (req, res, next) => {
    const { body } = req;

    if(body.id || body.id == '' ){
        return res.status(400).json({
            message: 'O Id não pode ser alterado.'
        })
    }else if(body.created_at || body.created_at == '' ){
        return res.status(400).json({
            message: 'A data não pode ser modificada.'
        })
    } else if(body.status == undefined){
        return res.status(400).json({
            message: 'O campo "status" é obrigatório.'
        })
    }else if(body.status == '') {
        return res.status(400).json({
            message: 'O campo "status" é obrigatório.'
        })
    }else if(body.title == undefined){
        return res.status(400).json({
            message: 'O campo "title" é obrigatório.'
        })
    }else if(body.title == '') {
        return res.status(400).json({
            message: 'O campo "title" é obrigatório.'
        })
    }

    next()
};

module.exports = {
    validateBody,
    validateUpdate
}