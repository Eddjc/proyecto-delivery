var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        nombreEmpresa: String,
        logo: Image,
        banner: Image,
        descripcion: String,
        calificacion: String,
        productos: Array
        
    }
);

module.exports = mongoose.model('empresas', esquema);