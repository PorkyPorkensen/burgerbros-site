import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartMap({cart}){

      const { setCart } = useContext(CartContext);

      function removeItem(id) {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
      }

    function increaseQuantity(id) {
  const updatedCart = cart.map(item =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  setCart(updatedCart);
}

function decreaseQuantity(id) {
  const updatedCart = cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ).filter(item => item.quantity > 0);

  setCart(updatedCart);
}

    return (
        cart.length > 0 ? cart.map(item => (
                <div className="cartOuter">
                <div key={item.id} className="cartInner">
                <div className="itemInfo">
                <p>{item.name} x {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <div className="qtyBtns">
                <button onClick={() => increaseQuantity(item.id)}><p>+</p></button>
                <button onClick={() => decreaseQuantity(item.id)}><p>-</p></button>
                </div>
                </div>
                <div className="orderImg"><img src={item.url} width={170}/></div>

              </div>
                <div className="remBtnDiv"><button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button></div>
                </div>
        )): ""
    )
}