const Usuario = require('../models/usuario');

// Cria um novo usuário
async function create(req, res) {
    try {
        const usuario = new Usuario(req.body);
        const usuarioCriado = await usuario.save();
        res.status(201).json(usuarioCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os usuários
async function getAll(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um usuário por ID
async function getById(req, res) {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um usuário
async function update(req, res) {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um usuário
async function remove(req, res) {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário removido com sucesso' });
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
