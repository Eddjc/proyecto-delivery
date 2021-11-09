var express = require('express');
var router = express.Router(); //lo usuamos para gestionar todas las peticiones
var empresa = require('../models/empresa')
var mongoose = require('mongoose');

//OBTENER EMPRESAS
router.get('/', function(req,res){
    empresa.find({},{_id: true, nombreEmpresa: true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();

    });
});
