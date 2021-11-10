var express = require('express');
var router = express.Router(); //lo usuamos para gestionar todas las peticiones
var categoria = require('../models/categoria')
var mongoose = require('mongoose');

//OBTENER EMPRESAS
router.get('/', function(req,res){
    categoria.find({},{_id:true, nombreCategoria:true})//aqui podemos poner los filtros 
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();

    });
    // res.send('enrutador para servicios de empresas');
    // res.end();
});




module.exports = router;