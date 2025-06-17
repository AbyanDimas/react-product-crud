const Product = require('../models/Product');

// Get all products dengan pagination dan filtering
const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category || '';
    const search = req.query.search || '';

    const result = await Product.findAll(page, limit, category, search);
    
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result.products,
      pagination: result.pagination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
        data: null
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// Create new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock_quantity, image_url } = req.body;
    
    // Validasi input
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: 'Name and price are required',
        data: null
      });
    }
    
    if (price < 0) {
      return res.status(400).json({
        success: false,
        message: 'Price cannot be negative',
        data: null
      });
    }
    
    const productData = {
      name,
      description,
      price: parseFloat(price),
      category,
      stock_quantity: parseInt(stock_quantity) || 0,
      image_url
    };
    
    const product = await Product.create(productData);
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, stock_quantity, image_url } = req.body;
    
    // Validasi input
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: 'Name and price are required',
        data: null
      });
    }
    
    if (price < 0) {
      return res.status(400).json({
        success: false,
        message: 'Price cannot be negative',
        data: null
      });
    }
    
    const productData = {
      name,
      description,
      price: parseFloat(price),
      category,
      stock_quantity: parseInt(stock_quantity) || 0,
      image_url
    };
    
    const product = await Product.update(id, productData);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
        data: null
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.delete(id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
        data: null
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Product.getCategories();
    
    res.status(200).json({
      success: true,
      message: 'Categories retrieved successfully',
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories
};

