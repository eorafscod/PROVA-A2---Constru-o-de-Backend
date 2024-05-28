const express = require('express')
const router = express.Router()

// controllers
const usuariosController = require('../controllers/usuarioController')
const generoController = require('../controllers/generoController')
// validators
const { validarUsuario } = require('../validators/usuariovalidator')
const validarID = require('../validators/idValidator')

// serie - Cargo
// genero - Departamentos
// filme - Funcionarios
// avaliacao - Projetos
router.post('/generos', generoController.create)
router.get('/generos', generoController.getAll)
router.get('/generos/:id', generoController.getById)
router.put('/generos/:id', generoController.update)
router.delete('/generos/:id', generoController.remove)

// Rotas para usuários - tarefa
router.post('/usuarios', validarUsuario, usuariosController.create)
router.get('/usuarios', usuariosController.getAll)
router.get('/usuarios/:id', validarID, usuariosController.getById)
router.put('/usuarios/:id', validarID, validarUsuario, usuariosController.update)
router.delete('/usuarios/:id', validarID, usuariosController.remove)

module.exports = router;
