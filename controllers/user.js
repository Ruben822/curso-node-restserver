const { response } = require('express');

const getUsuarios = (req, res = response) => {
    const { nombre = 'no tiene nombre', apellido, edad } = req.query;
    res.json({
        msg: 'get desde el controller',
        nombre,
        apellido,
        edad
    });
}
const postUsuarios = (req, res = response) => {
    const { nombre, apellido } = req.body;
    res.json({
        msg: 'post desde el controller',
        nombre,
        apellido
    });
}
const putUsuarios = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put desde el controller',
        id
    });
}
const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'delete desde el controller'
    });
}


module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}