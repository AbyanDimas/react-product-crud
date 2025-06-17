const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories
} = require('../controllers/productController');

const router = express.Router();

// Routes untuk products
router.get('/products', getAllProducts);           // GET /api/products
router.get('/products/:id', getProductById);      // GET /api/products/:id
router.post('/products', createProduct);          // POST /api/products
router.put('/products/:id', updateProduct);       // PUT /api/products/:id
router.delete('/products/:id', deleteProduct);    // DELETE /api/products/:id

// Routes untuk categories
router.get('/categories', getCategories);         // GET /api/categories

module.exports = router;

