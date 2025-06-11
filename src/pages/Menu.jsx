import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import BurgMap from "../components/BurgMap";
import CartMap from "../components/CartMap";
import CartSummary from "../components/CartSummary";
import OthersMap from "../components/OthersMap";
import { fetchBurgers, fetchOthers } from "../services/firebaseService";

export default function Menu(){

    const [burgers, setBurgers] = useState([]);
    const [others, setOthers] = useState([]);
    const { cart, addToCart, clearCart } = useContext(CartContext);
    const [showCartModal, setShowCartModal] = useState(false);

function removeNClose() {
    clearCart();
    setShowCartModal(false);
}



  // Fetch burger data
  useEffect(() => {
  async function getData() {
    const burgers = await fetchBurgers();
    const others = await fetchOthers();

    setBurgers(burgers);
    setOthers(others);
  }

  getData();
  }, [cart]);

    return (
        <div className="main">
        <h2 className="subHead">Apps & Starters</h2>
        <OthersMap others={others} addToCart={addToCart} />
        <h2 className="subHead">Burgers</h2>
        <BurgMap burgers={burgers} addToCart={addToCart} />
      {/* Sticky Cart Banner */}
      {cart.length > 0 && (
        <div className="cart-banner" onClick={() => setShowCartModal(true)}>
          <p>{cart.reduce((sum, item) => sum + item.quantity, 0)} item(s) in cart</p>
          <p>View Cart →</p>
        </div>
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <button className="close-btn" onClick={() => setShowCartModal(false)}>X</button>
            <h3>Your Cart</h3>
            <br />
            <div className="modalBottom">
              <CartSummary cart={cart} onClear={removeNClose} />
            </div>
          </div>
        </div>
      )}
      </div>
    )
}