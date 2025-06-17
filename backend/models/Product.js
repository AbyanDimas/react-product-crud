const { pool } = require('../config/database');

class Product {
  // Get all products dengan pagination dan filtering
  static async findAll(page = 1, limit = 10, category = '', search = '') {
    try {
      const offset = (page - 1) * limit;
      let query = 'SELECT * FROM products WHERE 1=1';
      let countQuery = 'SELECT COUNT(*) as total FROM products WHERE 1=1';
      const params = [];
      const countParams = [];

      // Filter berdasarkan category
      if (category) {
        query += ' AND category = ?';
        countQuery += ' AND category = ?';
        params.push(category);
        countParams.push(category);
      }

      // Filter berdasarkan search (nama atau deskripsi)
      if (search) {
        query += ' AND (name LIKE ? OR description LIKE ?)';
        countQuery += ' AND (name LIKE ? OR description LIKE ?)';
        const searchParam = `%${search}%`;
        params.push(searchParam, searchParam);
        countParams.push(searchParam, searchParam);
      }

      // Order by created_at descending
      query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
      params.push(limit, offset);

      const [products] = await pool.execute(query, params);
      const [countResult] = await pool.execute(countQuery, countParams);
      const total = countResult[0].total;

      return {
        products,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: limit
        }
      };
    } catch (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }

  // Get product by ID
  static async findById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM products WHERE id = ?',
        [id]
      );
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }
  }

  // Create new product
  static async create(productData) {
    try {
      const {
        name,
        description,
        price,
        category,
        stock_quantity,
        image_url
      } = productData;

      const [result] = await pool.execute(
        `INSERT INTO products (name, description, price, category, stock_quantity, image_url) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [name, description, price, category, stock_quantity || 0, image_url || null]
      );

      return await this.findById(result.insertId);
    } catch (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  // Update product
  static async update(id, productData) {
    try {
      const {
        name,
        description,
        price,
        category,
        stock_quantity,
        image_url
      } = productData;

      const [result] = await pool.execute(
        `UPDATE products 
         SET name = ?, description = ?, price = ?, category = ?, 
             stock_quantity = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP 
         WHERE id = ?`,
        [name, description, price, category, stock_quantity, image_url, id]
      );

      if (result.affectedRows === 0) {
        return null;
      }

      return await this.findById(id);
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  }

  // Delete product
  static async delete(id) {
    try {
      const [result] = await pool.execute(
        'DELETE FROM products WHERE id = ?',
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  }

  // Get all unique categories
  static async getCategories() {
    try {
      const [rows] = await pool.execute(
        'SELECT DISTINCT category FROM products WHERE category IS NOT NULL ORDER BY category'
      );
      return rows.map(row => row.category);
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }
}

module.exports = Product;

