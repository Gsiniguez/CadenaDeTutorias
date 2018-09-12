var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/demo01', function(req, res, next) {
  res.render('demo', { title: 'Express' });
});

module.exports = router;
