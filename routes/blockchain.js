var express = require('express');
var router = express.Router();
var BlockChain = require('../BlockChain/blockchain.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  var bc = new BlockChain();
  //bc.addTransactions("Gonza","Jose","Paradigmas3")

  res.json(bc)
  res.render('blockchain');
});


module.exports = router;
