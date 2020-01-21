exports.seed = function(knex, Promise) {
  return knex('products')
    .del()
    .then(function() {
      return knex('products').insert([
        {imagen:'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
         title: 'Cereal',
        price: '25000',
      description:'delicioso cereal '},
      
      {imagen:'https://cdn.pixabay.com/photo/2016/02/19/10/29/breakfast-1209260_960_720.jpg',
         title: 'Muesli',
        price: '30000',
      description:'delicioso mezcla de frutos rojos '}
      ]);
    });
};
