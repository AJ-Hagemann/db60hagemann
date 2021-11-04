var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('player', { title: 'Search Results player' });
});

module.exports = router;