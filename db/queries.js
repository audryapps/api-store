const knex = require('./knex'); // the connection!

module.exports = {
  getAll() {
    return knex('products');
  },
  getOne(id) {
    return knex('products').where('id', id).first();
  },
  create(products) {
    return knex('products').insert(products, '*');
  },
  update(id, products) {
    return knex('products').where('id', id).update(products, '*');
  },
  delete(id) {
    return knex('products').where('id', id).del();
  }
}