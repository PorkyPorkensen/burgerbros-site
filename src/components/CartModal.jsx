import React from "react";

export default function  CartModal({ title, onClose, children }) {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h3>{title}</h3>
        <br />
        <div className="modalBottom">
          {children}
        </div>
      </div>
    </div>
  );
}