const Schema = require('validate')

module.exports = new Schema({
    nome: {
        type: String,
        required: true,
        length: { min: 3, max: 45 },
        message: "Nome é obrigatório e deve ter no mínimo 3 letras e no máximo 45!"
    },
    email: {
        type: String,
        required: true,
        match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        message: 'E-mail inválido ou em branco!'
    },
    salarioBase: {
        type: Number,
        required: true,
        message: "Salário base é obrigatório e só aceita números!"
    },
    cargo: {
        type: String,
        required: true,
        message: "Cargo é obrigatório!"
    }
})