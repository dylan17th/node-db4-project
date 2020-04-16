const express = require('express');
const recipesRouter = require('../recipes/recipes-router');
const server = express();


server.use(express.json());
server.use('/api/recipes', recipesRouter)

server.get('/', (req,res)=>{
    res.status(200).json({message: 'API is running correctly'});
})

module.exports = server;