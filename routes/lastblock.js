var express = require('express');
var router = express.Router();
var bcCreada = 
/* GET home page. */
router.get('/blockchain/lastblock', function(req, res, next) {
  res.render('lastblock');
});

module.exports = router;
