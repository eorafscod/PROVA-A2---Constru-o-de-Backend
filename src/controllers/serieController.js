const Serie = require('../models/serie');

// Cria um nova serie
async function create(req, res) {
    try {
        const serie = new Serie(req.body);
        const serieCriada = await serie.save();
        res.status(201).json(serieCriada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todas as séries
async function getAll(req, res) {
    try {
        const series = await Serie.find().populate('genero');
        res.json(series);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém uma série por ID
async function getById(req, res) {
    try {
        const serie = await Serie.findById(req.params.id).populate('genero');
        if (!serie) {
            return res.status(404).json({ error: 'Série não encontrada' });
        }
        res.json(serie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza uma série
async function update(req, res) {
    try {
        const serie = await Serie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!serie) {
            return res.status(404).json({ error: 'Série não encontrada' });
        }
        res.json(serie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove uma série
async function remove(req, res) {
    try {
        const serie = await Serie.findByIdAndDelete(req.params.id);
        if (!serie) {
            return res.status(404).json({ error: 'Série não encontrada' });
        }
        res.json({ message: 'Série removida com sucesso' });
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
