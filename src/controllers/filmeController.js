const Filme = require('../models/filme');

// Cria um novo filme
async function create(req, res) {
    try {
        const filme = new Filme(req.body);
        const filmeCriado = await filme.save();
        res.status(201).json(filmeCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os filmes
async function getAll(req, res) {
    try {
        const filmes = await Filme.find().populate('genero');
        res.json(filmes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um filme por ID
async function getById(req, res) {
    try {
        const filme = await Filme.findById(req.params.id).populate('genero');
        if (!filme) {
            return res.status(404).json({ error: 'Filme não encontrado' });
        }
        res.json(filme);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um filme
async function update(req, res) {
    try {
        const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!filme) {
            return res.status(404).json({ error: 'Filme não encontrado' });
        }
        res.json(filme);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um filme
async function remove(req, res) {
    try {
        const filme = await Filme.findByIdAndDelete(req.params.id);
        if (!filme) {
            return res.status(404).json({ error: 'Filme não encontrado' });
        }
        res.json({ message: 'Filme removido com sucesso' });
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
