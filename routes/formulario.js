var express = require('express');
var router = express.Router();
var url = require('url-parse')
var BlockChain = require('../BlockChain/blockchain.js')
var Block = require('../BlockChain/bloque')
var bc = new BlockChain(); 

router.get("/blockchain/formulario", function (req, res, next) {
    let query = url(req.url, true).query;
    
    res.render('formulario',{
        title:'Respuesta',
        nombre: query.nombre,
        apellido: query.apellido,
        email:query.email,
        materia:query.materia,
        profesor:query.profesor,
        fecha:query.fecha,
        hora:query.hora
    })
        
});

router.post("/blockchain/formulario", function (req, res, next) {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let materia = req.body.materia;
    let profesor = req.body.profesor;
    let fecha = req.body.fecha;
    let hora = req.body.hora;
    bc.addBlock(new Block({nombre,apellido,email,materia,profesor,fecha,hora}))
    res.json(bc)
});

router.get("/blockchain/lastblock", function (req, res, next) {
    res.json(bc.latestBlock())
    
});
module.exports = router,bc;
