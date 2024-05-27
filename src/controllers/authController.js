const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const register = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senha, salt);
        const novoUsuario = new Usuario({
            nome,
            email,
            senha: hashedPassword,
        });
        await novoUsuario.save();
        res.status(201).json({ mensagem: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado!' });

        const isMatch = await bcrypt.compare(senha, usuario.senha);
        if (!isMatch) return res.status(400).json({ mensagem: 'Senha inválida!' });

        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register, login };
