var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from products').then(function(products) {
    res.send(products.rows);
  });
});

module.exports = router;
