const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    genero: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genero'
    }]
});

const Filme = mongoose.model('Filme', filmeSchema);

module.exports = Filme;
