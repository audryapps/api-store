const knex = require('./knex'); // the connection!

module.exports = {
  getAllProducts() {
    return knex('products');
  },
  getProduct(id) {
    return knex('products').where('id', id).first();
  },
  createProduct(products) {
    return knex('products').insert(products, '*');
  },
  updateProduct(id, products) {
    return knex('products').where('id', id).update(products, '*');
  },
  deleteProduct(id) {
    return knex('products').where('id', id).del();
  }
}