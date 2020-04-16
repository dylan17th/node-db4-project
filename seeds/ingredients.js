exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'sauce'},
        {id: 2, ingredient_name: 'doe'},
        {id: 3, ingredient_name: 'cheese'},
        {id: 4, ingredient_name: 'roll'},
        {id: 5, ingredient_name: 'steak meat'},
        {id: 7, ingredient_name: 'onions'},
        {id: 8, ingredient_name: 'pepperoni'},
        {id: 9, ingredient_name: 'sausage'},
        {id: 10, ingredient_name: 'green pepper'}
      ]);
    });
};