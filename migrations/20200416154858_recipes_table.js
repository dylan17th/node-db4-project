

exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('id')
        tbl.string('recipe_name', 128).unique().notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('id')
      tbl.string('ingredient_name', 128).unique().notNullable();
  })
  .createTable('recipes_ingredients', tbl => {
      tbl.increments('id')
      tbl.integer('ingredient_id').notNullable().references('id').inTable('ingredients').onDelete('RESTRICT').onUpdate('CASCADE')
      tbl.integer('recipes_id').notNullable().references('id').inTable('recipes').onDelete('RESTRICT').onUpdate('CASCADE')
      tbl.float('quantity').notNullable()
      tbl.string('measurement_by', 25).notNullable();
  })
  .createTable('instructions', tbl => {
      tbl.increments('id')
      tbl.integer('recipes_id').notNullable().references('id').inTable('recipes').onDelete('RESTRICT').onUpdate('CASCADE')
      tbl.string('instruction', 128).unique().notNullable();  
  })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
  };