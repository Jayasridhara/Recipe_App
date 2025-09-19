const Recipe = require("../models/Recipe");

const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);

     if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.instructions) {
      return res.status(400).json({ message: 'Please enter all required fields: name, ingredients, instructions' });
    }
     const savedRecipe = await newRecipe.save();
    res.status(201).json({ message: 'Recipe Plan Created', recipe: savedRecipe });
   
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error for unique fields
      return res.status(400).json({ message: 'A recipe with this name already exists.' });
    }
    res.status(500).json({ message: error.message });
  }
};

const getAllRecipes=async (req, res) => {
    try {
        const recipe = await Recipe.find().select('-__v');
        res.status(200).json({ recipe });
    } catch (error) {
        res.status(500).json({ message: 'Fetching meal plans failed...', error: error.message });
    }
}

const getRecipeById = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findById(id).select('-__v');

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json({ recipe });

    } catch (error) {
        res.status(500).json({ message: 'Fetching recipe details failed...', error: error.message });
    }
}
const updateRecipe=async (req,res)=>{
   try{
    // get the id from the url params
        const id = req.params.id;

        // get the data to update from the request body
        const updateData = req.body;

        // find the recipe details by id and update it with the new data
        const updateRecipe = await Recipe.findByIdAndUpdate(id, updateData, { new: true });

        if (!updateRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json({ message: 'Recipe Details Updated', recipe: updateRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Updating recipe details failed...', error: error.message });
    }
}

const deleteRecipe=async (req,res)=>{
   try{
   const id=req.params.id;
     const deleteRecipe=await Recipe.findByIdAndDelete(id);
        if (!deleteRecipe) {
            return res.status(404).json({ message: 'Recipe Details not found' });
        }

        res.status(200).json({ message: 'Recipe Details Deleted', recipe: deleteRecipe });

   }
   catch (error) {
        res.status(500).json({ message: 'Deleting Recipe Details failed...', error: error.message });
    }
}

module.exports={
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}