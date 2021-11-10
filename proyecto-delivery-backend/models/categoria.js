var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        nombreCategoria: String,
        imgCategoria: String,
        empresas: Array,
    }
);

module.exports = mongoose.model('categorias', esquema); // aqui enlazamos la coleccion con el esquema

