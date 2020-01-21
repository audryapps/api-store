const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const productsDatabase = require('./connection');
const app = express();

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/products', (req, res) => {
  productsDatabase('products')
    .select('*')
    .then(products => res.status(200).json(products))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });
    });
});

app.get('/api/v1/products/:id', (req, res) => {
  productsDatabase('products')
    .select('*')
    .limit(1)
    .where({ id: req.params.id })
    .then(products => res.status(200).json(products))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });
    });
});

app.post('/api/v1/products', (req, res) => {
  productsDatabase('products')
    .insert(req.body)
    .then(() => res.status(201).json({ data: req.body }))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });                    
    });
});

app.listen(PORT, () => console.log('Example app is listening!'));
