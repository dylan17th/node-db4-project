const express = require('express');
const router = express.Router();
const Recipes = require('./model-recipes')

router.get('/', (req,res)=>{
    Recipes.getRecipes()
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(err => res.status(500).json({message: err}))
})

router.get('/:id/ingredients', (req,res)=>{
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => res.status(500).json(err))
})

router.get('/:id/instructions', (req,res)=> {
    const { id } = req.params;
    Recipes.getInstructions(id)
    .then(instructions => res.status(200).json(instructions))
    .catch(err => res.status(500).json({message: 'cant access database'}))
})

module.exports = router;