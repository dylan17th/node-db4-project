const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipes_id){
    return db('recipes_ingredients as ri')
    .where({recipes_id : recipes_id})
    .join('recipes as r', 'ri.recipes_id','=','r.id')
    .join('ingredients as i', 'ri.ingredient_id', '=','i.id')
    .select('ri.id','r.recipe_name','i.ingredient_name','ri.quantity','ri.measurement_by')
}

function getInstructions(recipes_id){
    return db('instructions as i')
    .where({recipes_id : recipes_id})
    .join('recipes as r','i.recipes_id','=','r.id')
    .select('i.id','r.recipe_name','i.instruction');
}