import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { fetchBurgers, fetchOthers } from "../services/firebaseService";
import {
  BurgMap,
  CartMap,
  CartSummary,
  OthersMap,
  CartModal
} from "../components";


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
          {/* Menu Items */}
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
            <CartModal title='Your Cart' onClose={() => setShowCartModal(false)}>
              <CartSummary cart={cart} onClear={removeNClose} />
            </CartModal>
          )}
      </div>
    )
}