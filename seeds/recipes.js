
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'supreme pizza'},
        {id: 2, recipe_name: 'philly cheese steak'}
      ]);
    });
};
