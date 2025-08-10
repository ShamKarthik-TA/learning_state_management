import React from 'react';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const sampleProducts = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.99 },
  { id: 3, name: 'Orange', price: 1.2 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Shop</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
