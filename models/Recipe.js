const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a recipe name'],
      unique: true, // Assuming recipe names should be unique
    },
    ingredients: {
      type: [String], // Array of strings
      required: [true, 'Please add ingredients'],
    },
    instructions: {
      type: String,
      required: [true, 'Please add instructions'],
    },
    cookingTime: {
      type: Number, // In minutes, for example
      required: false,
    },
    servings: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Recipe', recipeSchema,'recipe');