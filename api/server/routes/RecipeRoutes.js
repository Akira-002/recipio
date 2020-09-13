const express = require('express');
const router = express.Router();
import RecipeController from '../controllers/RecipeController';


// CRUD like RESTfull api
router.get('/', RecipeController.getAllRecipes);
router.post('/', RecipeController.addProduct);
router.get('/:id', RecipeController.getAProduct);
router.delete('/:id', RecipeController.deleteProduct);

export default router;