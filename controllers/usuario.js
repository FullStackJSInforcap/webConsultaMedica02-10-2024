const { findAll } = require("../service/usuario")

const findAllController = async (req, res) => {
    const usuarios = await findAll();
    res.render('usuarios', {
        usuarios
    });
}

module.exports = {
    findAllController
}