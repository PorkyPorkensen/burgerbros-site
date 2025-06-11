import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import heroImg from '../images/mainHero.jpg';
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { fetchBurgers } from "../services/firebaseService";
import {
  BurgMap,
  CartSummary,
  HeroSection,
  CartModal
} from "../components";
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
  async function getBurgerData() {
    try {
      const burgers = await fetchBurgers();
      setBurgers(burgers);
    } catch (error) {
      console.error("Error fetching burgers:", error);
    }
  }

  getBurgerData();
  }, [cart]);

  // -------------------
  // Render
  // -------------------
  return (
    <div>
      {/* Hero Section */}
      <HeroSection title='Our Mission'
        description='At Burger Bros, our mission is to serve up unforgettable burgers
          and classic comfort foods made with love, fresh ingredients, and a commitment
          to community. As a proud family-owned business, we bring people together around
          the table with hearty meals, friendly faces, and flavors that feel like home.'
          image={heroImg} />

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
        <CartModal title="Your Cart" onClose={() => setShowCartModal(false)}>
          <CartSummary cart={cart} onClear={removeNClose} />
        </CartModal>
      )}
    </div>
  );
}