const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { validarUsuario } = require('../validators/usuariovalidator');

router.post('/register', validarUsuario, register);
router.post('/login', login);

module.exports = router;
