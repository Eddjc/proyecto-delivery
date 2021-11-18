var express = require('express');
var router = express.Router(); //lo usuamos para gestionar todas las peticiones
var categoria = require('../models/categoria')
var mongoose = require('mongoose');

//OBTENER CATEGORIAS
router.get('/', function(req,res){
    categoria.find({},{_id:true, nombreCategoria:true})//aqui podemos poner los filtros 
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();

    })
});    
    // res.send('enrutador para servicios de empresas');
    // res.end();

    //OBTENER LISTADO DE TODAS LAS EMPRESAS 
    // http://localhost:8888/categorias/idCategoria/empresas

router.get('/:idCategoria/empresas', function(req,res){
  categoria.find(
      {
          _id: req.params.idCategoria,
          //"empresas._id": mongoose.Types.ObjectId(req.params.idEmpresa),
        // "producto._id": mongoose.Types.ObjectId(req.params.idProducto)
      },
      {"empresas":true})
    .then(result=>{
        res.send(result[0]);    
        res.end();
    })  
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//guaradar una empresa en una categoria 
router.post('/:idCategoria/empresas',function(req,res){
    categoria.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idCategoria)
        },
        {
            $push:{
                empresas:{
                    _id: mongoose.Types.ObjectId(),
                    nombreEmpresa: req.body.nombreEmpresa,
                    logo: req.body.logo,
                    banner: req.body.banner,
                    descripcion: req.body.descripcion,
                    calificacion: req.body.calificacion
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//.Eliminar empresa
router.delete('/:idCategoria/empresas/:idEmpresa',function(req,res){
    categoria.deleteOne(
        {
            _id: mongoose.Types.ObjectId(req.params.idCategoria),
            "empresas.id": mongoose.Types.ObjectId(req.params.idEmpresa)

            //  _id: req.params.idCategoria,
            //  _id: req.params.idEmpresa
        },
        {
             $pull:{
                 "empresas.$": mongoose.Types.ObjectId(req.params.idEmpresa)
             }
        }


    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})



module.exports = router;