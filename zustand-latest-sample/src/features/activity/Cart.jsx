import React from 'react';

// This component expects a cart prop: an array of product objects
const Cart = ({ cart }) => {
  return (
    <div style={{ border: '1px solid #888', padding: 16, margin: 8, borderRadius: 8 }}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
