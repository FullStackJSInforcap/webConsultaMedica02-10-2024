const axios = require('axios').default;

const findAll = async () => {
    const usuarios = await axios.get('http://127.0.0.1:3000/usuarios');
    return usuarios.data;
}

const findById = async () => {
    const usuario = await axios.get('http://127.0.0.1:3000/usuarios/1');
    return usuario.data;
}

const insert = async () => {
    const usuario = await axios.post('http://127.0.0.1:3000/usuarios', {
        _nombre: "Vicenta",
        _apellido: "Marin",
        _id: "37adc3",
        _fecha: "November 4th 2021",
        _hora: " 7:32:35 pm",
        _genero: "f"
    });
    return usuario.data;
}

const update = async () => {
    const usuario = await axios.put('http://127.0.0.1:3000/usuarios', {
        _nombre: "Vicenta",
        _apellido: "Marin",
        _id: "37adc3",
        _fecha: "November 4th 2021",
        _hora: " 7:32:35 pm",
        _genero: "f"
    });
    return usuario.data;
}

const deleteById = async () => {
    const usuario = await axios.delete('http://127.0.0.1:3000/usuarios/1');
    return usuario.data;
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    deleteById
}