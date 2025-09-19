const express=require('express');
const { getAllRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe } = require('../controller/recipeController');



const recipeRoutes=express.Router();

recipeRoutes.post('/', createRecipe);
recipeRoutes.get('/',getAllRecipes);
recipeRoutes.get('/:id',getRecipeById);
recipeRoutes.put('/:id',updateRecipe);
recipeRoutes.delete('/:id',deleteRecipe);

module.exports=recipeRoutes;