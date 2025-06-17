import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onEdit, onDelete }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="product-card">
      {product.image_url && (
        <div className="product-image">
          <img 
            src={product.image_url} 
            alt={product.name}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-category">{product.category}</span>
        </div>
        
        <p className="product-description">
          {product.description || 'No description available'}
        </p>
        
        <div className="product-details">
          <div className="product-price">
            {formatPrice(product.price)}
          </div>
          <div className="product-stock">
            Stock: {product.stock_quantity}
          </div>
        </div>
        
        <div className="product-meta">
          <small>Created: {formatDate(product.created_at)}</small>
          {product.updated_at !== product.created_at && (
            <small>Updated: {formatDate(product.updated_at)}</small>
          )}
        </div>
        
        <div className="product-actions">
          <button 
            className="btn btn-edit"
            onClick={() => onEdit(product)}
          >
            Edit
          </button>
          <button 
            className="btn btn-delete"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

