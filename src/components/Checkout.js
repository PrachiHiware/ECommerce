import React, { useState } from 'react';

function Checkout({ cartItems, applyDiscountCode, handleCheckout }) {
  const [discountCode, setDiscountCode] = useState('');

  const handleApplyDiscount = () => {
    applyDiscountCode(discountCode);
  };

  const handleOrderCheckout = () => {
    handleCheckout(discountCode);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Discount Code"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={handleApplyDiscount}
              style={{ backgroundColor: "Yellow"}}>
              Apply Discount
      </button>
      <button onClick={handleOrderCheckout}
              style={{ backgroundColor: "Yellow"}}>
              Checkout
      </button>
    </div>
  );
}

export default Checkout;
