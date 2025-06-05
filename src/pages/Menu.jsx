import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import BurgMap from "../components/BurgMap";
import CartMap from "../components/CartMap";

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
    async function fetchBurgers() {
      const querySnapshot = await getDocs(collection(db, "burgers"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBurgers(data);
      console.log(data);
    }
    async function fetchOthers(){
        const querySnapshot = await getDocs(collection(db, "others"))
        const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setOthers(data)
    }

    fetchBurgers();
    fetchOthers()
  }, [cart]);

    return (
        <div>
            <h2 className="subHead">Apps & Starters</h2>
         <div className="foodDiv">
        {others.map((other) => (
          <div key={other.id} className="itemDiv">
            <img className='foodPic' src={other.url} alt={`food-${other.id}`} />
            <h3>{other.name}</h3>
            <p>{other.description}</p>
            <p className="price">Price: {other.price}</p>
            <button onClick={() => addToCart(other)}>Add to Cart</button>
          </div>
        ))}
      </div>
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
            <CartMap cart={cart} />
            <br />
            <hr />
            <div className="modalBottom">
                <p>Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
                <button onClick={removeNClose}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
      </div>
    )
}