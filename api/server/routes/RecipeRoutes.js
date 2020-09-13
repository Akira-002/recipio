const express = require('express');
const router = express.Router();
import ProductController from '../controllers/ProductController';


// CRUD like RESTfull api
router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.addProduct);
router.get('/:id', ProductController.getAProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;