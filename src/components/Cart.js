import React, { useState } from 'react';

function Cart({ cartItems, addItemToCart }) {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleAddToCart = () => {
    if (selectedProduct) {
      addItemToCart(selectedProduct);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <select onChange={(e) => setSelectedProduct(JSON.parse(e.target.value))}>
        <option value="">Select a product</option>
        <option value='{"name": "Product 1", "price": 20}'>Product 1 - $20</option>
        <option value='{"name": "Product 2", "price": 30}'>Product 2 - $30</option>
        <option value='{"name": "Product 3", "price": 10}'>Product 3 - $10</option>
        <option value='{"name": "Product 4", "price": 50}'>Product 4 - $50</option>
        <option value='{"name": "Product 5", "price": 80}'>Product 5 - $80</option>
        <option value='{"name": "Product 6", "price": 10}'>Product 6 - $10</option>
        <option value='{"name": "Product 7", "price": 40}'>Product 7 - $40</option>
      </select>
      <br></br><br></br>
      <button onClick={handleAddToCart}
              style={{ backgroundColor: "Yellow"}}>Add to Cart</button>
    </div>
  );
}

export default Cart;
