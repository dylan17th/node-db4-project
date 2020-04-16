
exports.seed = function(knex) {
  return knex('recipes_ingredients').del()
    .then(function () {
      return knex('recipes_ingredients').insert([
        {id: 1, ingredient_id: 1 , recipes_id: 1, quantity: 6 , measurement_by: 'oz'},
        {id: 2, ingredient_id: 2, recipes_id: 1, quantity: 1 , measurement_by: 'lb'},
        {id: 3, ingredient_id: 3, recipes_id: 1, quantity: 12 , measurement_by: 'oz'},
        {id: 4, ingredient_id: 7, recipes_id: 1, quantity: 2 , measurement_by: 'oz'},
        {id: 5, ingredient_id: 8, recipes_id: 1, quantity: .5 , measurement_by: 'lb'},
        {id: 6, ingredient_id: 9, recipes_id: 1, quantity: .5 , measurement_by: 'lb'},
        {id: 7, ingredient_id: 10 , recipes_id: 1, quantity: 6 , measurement_by: 'oz'},
        {id: 8, ingredient_id: 4, recipes_id: 2, quantity: 1 , measurement_by: 'roll'},
        {id: 9, ingredient_id: 5, recipes_id: 2, quantity: 1 , measurement_by: 'lb'},
        {id: 10, ingredient_id: 3, recipes_id: 2, quantity: 5.5 , measurement_by: 'oz'},
        {id: 11, ingredient_id: 7, recipes_id: 2, quantity: 6 , measurement_by: 'oz'},
        {id: 12, ingredient_id: 10, recipes_id: 2, quantity: 6 , measurement_by: 'oz'}
      ]);
    });
};
