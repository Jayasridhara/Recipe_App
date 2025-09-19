const express=require('express');
const recipeRoutes = require('./routes/recipeRoutes');

const app=express();

//listen for incomin g requires
app.use(express.json());
app.use('/recipe',recipeRoutes);

module.exports=app;