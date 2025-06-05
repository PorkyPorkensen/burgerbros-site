import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import heroImg from '../images/mainHero.jpg';
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import BurgMap from "../components/BurgMap";
import CartMap from "../components/CartMap";

export default function Home() {
  // -------------------
  // State
  // -------------------
  const [burgers, setBurgers] = useState([]);
  const { cart, addToCart, clearCart } = useContext(CartContext);
  const [showCartModal, setShowCartModal] = useState(false);
  
function removeNClose() {
  clearCart();
  setShowCartModal(false);
}

  // Fetch burger data
  useEffect(() => {
    async function fetchBurgers() {
      const querySnapshot = await getDocs(collection(db, "burgers"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBurgers(data);
      console.log(data);
    }

    fetchBurgers();
  }, [cart]);

  // -------------------
  // Render
  // -------------------
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h2>Our Mission</h2>
        <p>
          At Burger Bros, our mission is to serve up unforgettable burgers
          and classic comfort foods made with love, fresh ingredients, and a commitment
          to community. As a proud family-owned business, we bring people together around
          the table with hearty meals, friendly faces, and flavors that feel like home.
        </p>
        <div className="imgDiv">
          <img src={heroImg} />
        </div>
      </div>

      {/* Burger List */}
      <h2 className="subHead">Burger Bros Specialties</h2>
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
            <CartMap cart={cart} />
            <hr />
            <div className="modalBottom">
                <p>Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
                <button onClick={removeNClose}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}