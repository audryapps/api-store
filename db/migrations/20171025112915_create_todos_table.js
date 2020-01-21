exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments('id');
    table.text('imagen');
    table.varchar('title');
    table.double('price');
    table.varchar('description');      
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todos');
};
