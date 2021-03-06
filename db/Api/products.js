const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validProduct(products) {
  const hasTitle = typeof products.title == 'string' && products.title.trim() != '';
  const hasImagen= typeof products.imagen == 'string' && products.imagen.trim() != '';
  const hasPrice= typeof products.price == 'string' && products.price.trim() != '';
  const hasDescription = typeof products.description == 'string' && products.description.trim() != '';
  
  return hasTitle && hasDescription && hasImagen && hasPrice;
}

router.get('/', (req, res) => {
  queries.getAllProducts().then(products => {
    res.json(products);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getProduct(req.params.id).then(products => {
    if(products) {
      res.json(products);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validProduct(req.body)) {
    queries.createroduct(req.body).then(products => {
      res.json(products[0]);
    });
  } else {
    next(new Error('Invalid product'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validProduct(req.body)) {
    queries.update(req.params.id, req.body).then(products => {
      res.json(products[0]);
    });
  } else {
    next(new Error('Invalid product'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.deleteProduct(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;