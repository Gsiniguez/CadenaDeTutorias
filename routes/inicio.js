var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/blockchain/inicio', function(req, res, next) {
  res.render('inicio');
});

module.exports = router;
