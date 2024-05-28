const Genero = require('../models/genero');

// Cria um novo gênero
async function create(req, res) {
    try {
        const genero = new Genero(req.body);
        const generoCriado = await genero.save();
        res.status(201).json(generoCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os gêneros
async function getAll(req, res) {
    try {
        const generos = await Genero.find();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um gênero por ID
async function getById(req, res) {
    try {
        const genero = await Genero.findById(req.params.id);
        if (!genero) {
            return res.status(404).json({ error: 'Gênero não encontrado' });
        }
        res.json(genero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um gênero
async function update(req, res) {
    try {
        const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!genero) {
            return res.status(404).json({ error: 'Gênero não encontrado' });
        }
        res.json(genero);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um gênero
async function remove(req, res) {
    try {
        const genero = await Genero.findByIdAndDelete(req.params.id);
        if (!genero) {
            return res.status(404).json({ error: 'Gênero não encontrado' });
        }
        res.json({ message: 'Gênero removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
