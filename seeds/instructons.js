exports.seed = function(knex) {
  return knex('instructions').del()
    .then(function () {
      return knex('instructions').insert([
        {id: 1, recipes_id: 1, instruction: 'roll out doe'},
        {id: 2,recipes_id: 1, instruction: 'use spoon to spread sauce gently over top of the doe'},
        {id: 3, recipes_id: 1, instruction: 'spread the cheese evenly over the doe'},
        {id: 7, recipes_id: 1, instruction: 'spread pepperoni over the cheese spaced out evenly'},
        {id: 8, recipes_id: 1, instruction: 'spread sausage over the pizza evenly'},
        {id: 9, recipes_id: 1, instruction: 'spread onions evenly over the pizza'},
        {id: 10, recipes_id: 1, instruction: 'spread green peppers over the pizza evenly'},
        {id: 11, recipes_id: 1, instruction: 'preheat oven to 400'},
        {id: 12, recipes_id: 1, instruction: 'put pizza in oven for 10 minutes or until desired brownness'},
        {id: 13, recipes_id: 2, instruction: 'open roll and place on table'},
        {id: 14, recipes_id: 2, instruction: 'cook meat for 10 minutes or until desired texture'},
        {id: 15, recipes_id: 2, instruction: 'put cheese on top of meat to melt'},
        {id: 16, recipes_id: 2, instruction: 'scoop up meat and cheese and place it in the roll'},
        {id: 17, recipes_id: 2, instruction: 'put onions on top of meat'},
        {id: 18, recipes_id: 2, instruction: 'put green peppers on top of onions'}
      ]);
    });
};
