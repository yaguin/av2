const mongoose = require('mongoose')

// definição do esquema
const cursoSchema = new mongoose.Schema({
    id : {
        type: String,
        required: false
    },
    area: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    regime: {
        type: String,
        required: true
    },
    numeroDeSemestres: {
        type: Number,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: Date.now
    },
    atualizadoEm: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// configurando o esquema no banco
module.exports = mongoose.model('Curso', cursoSchema)