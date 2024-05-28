const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
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

const Serie = mongoose.model('Serie', serieSchema);

module.exports = Serie;
