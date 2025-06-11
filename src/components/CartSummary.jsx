import React from "react";
import CartMap from "./CartMap"; // Adjust import path if needed

function CartSummary({ cart, onClear, onProceed }) {
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)

  return (
    <div className="cart-summary">
      <h2 className="header">Your Order</h2>
      <CartMap cart={cart} />

      <div className="totalNButtons">
        <h3>Total: ${total}</h3>
        <button onClick={onClear} className="clear-btn">Clear Cart</button>
        {onProceed && (
          <button onClick={onProceed} className="proceed-btn">Proceed to Payment</button>
        )}
      </div>
    </div>
  );
}

export default CartSummary;