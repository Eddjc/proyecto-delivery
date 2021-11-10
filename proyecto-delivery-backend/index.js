var express = require('express');
var cors = require('cors');
var categoriasRouter = require('./routers/categorias-router');

var app =  express();
var database = require('./modules/database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/categorias', categoriasRouter);

app.listen(3000, ()=>{
    console.log('Servidor backend levantado puerto 3000');
});

