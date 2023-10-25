import React, { useState } from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discountCodes, setDiscountCodes] = useState([]);
  const [purchaseInfo, setPurchaseInfo] = useState({
    itemsCount: 0,
    totalPurchaseAmount: 0,
    discountCodes: [],
  });

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    updatePurchaseInfo(item.price);
  };

  const handleCheckout = (code) => {
    // Check if it's an nth order
    if (purchaseInfo.itemsCount % 3 === 0) {
      applyDiscountCode(code);
    } else {
      alert('Order placed successfully');
    }
  };

  const applyDiscountCode = (code) => {
    // Simulate a valid discount code
    const validDiscountCode = 'DISCOUNT10';

    if (code === validDiscountCode) {
      const discountAmount = calculateDiscount(cartItems, code);
      setPurchaseInfo({
        ...purchaseInfo,
        discountCodes: [...purchaseInfo.discountCodes, code],
      });

      alert('Order placed successfully with a 10% discount!');
    } else {
      alert('Invalid discount code');
    }
  };

  const calculateDiscount = (cartItems, code) => {
    const discountAmounts = {
      DISCOUNT10: 0.10, // 10% discount
      // Add more discount codes and their corresponding amounts as needed
    };

    return cartItems.reduce((total, item) => {
      return total + item.price * discountAmounts[code];
    }, 0);
  };

  const updatePurchaseInfo = (priceChange) => {
    setPurchaseInfo((prevPurchaseInfo) => ({
      itemsCount: prevPurchaseInfo.itemsCount + 1,
      totalPurchaseAmount: prevPurchaseInfo.totalPurchaseAmount + priceChange,
      discountCodes: prevPurchaseInfo.discountCodes,
    }));
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>E-commerce Store</h1>
      </div>
      <div className="body-content">
        <div className="cart-section">
          
          <Cart cartItems={cartItems} addItemToCart={addItemToCart} />
        </div>
        <div className="checkout-section">
          
          <Checkout
            cartItems={cartItems}
            applyDiscountCode={applyDiscountCode}
            handleCheckout={handleCheckout}
          />
        </div>
      </div>
      <div className="admin-section">
        
        <Admin
          generateDiscountCode={() => applyDiscountCode('DISCOUNT10')}
          purchaseInfo={purchaseInfo}
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}

export default App;
