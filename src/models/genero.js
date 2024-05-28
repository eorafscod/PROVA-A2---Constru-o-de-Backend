const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
});

const Genero = mongoose.model('Genero', generoSchema);

module.exports = Genero;
