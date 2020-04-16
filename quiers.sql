-- can see the ingredients, recipe, quatity and how much of each the recipe needs 
SELECT ri.id, i.ingredient_name, r.recipe_name, ri.quantity, ri.measurement_by
FROM [recipes_ingredients] as ri
JOIN ingredients as i ON ri.ingredient_id = i.id
JOIN recipes as r ON ri.recipes_id = r.id;


-- can see recipe and the steps needed to make the recipe

SELECT i.id , r.recipe_name, i.instruction
FROM instructions as i
JOIN recipes as r ON i.recipes_id = r.id;