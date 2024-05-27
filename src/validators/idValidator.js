const { ObjectId } = require('mongoose').Types;

function validarID(req, res, next) {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    next();
}

module.exports = validarID;
