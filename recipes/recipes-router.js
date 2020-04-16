const express = require('express');
const router = express.Router();
const Recipes = require('./model-recipes')

router.get('/', (req,res)=>{
    Recipes.get()
    .then(recipe => {
        res.status(200).json(recipe);
    })
})

module.exports = router;