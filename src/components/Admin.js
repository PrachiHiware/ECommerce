import React from 'react';

function Admin({ generateDiscountCode, purchaseInfo, cartItems }) {
  const calculateTotalDiscountAmount = () => {
    // Calculate the total discount amount based on the applied discount codes and cart items
    const totalDiscountAmount = purchaseInfo.discountCodes.reduce((total, code) => {
      const discountAmount = calculateDiscountAmountForCode(code);
      return total + discountAmount;
    }, 0);

    return totalDiscountAmount;
  };

  const calculateDiscountAmountForCode = (code) => {
    // Implement logic to calculate the discount amount for a specific code
    // This logic depends on how discounts are applied
    // For example, if each code represents a fixed discount percentage, you can use a lookup
    const discountAmounts = {
      DISCOUNT10: 0.10, // 10% discount
      // Add more discount codes and their corresponding amounts as needed
    };

    return cartItems.reduce((total, item) => {
      return total + item.price * discountAmounts[code];
    }, 0);
  };

  const totalDiscountAmount = calculateTotalDiscountAmount();

  return (
    <div>
      <h2>Admin</h2>
      <button onClick={generateDiscountCode}>Generate Discount Code</button>
      <div>
        <h3>Purchase Information</h3>
        <p>Total Items Purchased: {purchaseInfo.itemsCount}</p>
        <p>Total Purchase Amount: ${purchaseInfo.totalPurchaseAmount.toFixed(2)}</p>
        <p>Discount Codes: {purchaseInfo.discountCodes.join(', ')}</p>
        <p>Total Discount Amount: ${totalDiscountAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Admin;
