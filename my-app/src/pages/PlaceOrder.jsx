import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartMap from "../components/cartMap";

export default function PlaceOrder(){
    const { cart, addToCart, clearCart } = useContext(CartContext);


    console.log(cart)
    return (
        <>
        <h2 className="header">Place an Order</h2>
        <div className="orderHero">

        <CartMap cart={cart} />
        {cart.length > 0 ? <div className="totalNButtons"><h2>Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</h2>
            <button onClick={clearCart}>Clear Cart</button>
            <button>Proceed to Payment</button></div> : <div><p>Whoops! It appears your cart is empty..</p></div>}
        </div>
        <h2 className="header">Contact Us</h2>
        <div className="orderHero contact">
            <p>Phone: +1 (705) 999-9999</p>
            <p>Email: FakeBurgers@fakemail.com</p>
            <div className="mapDiv">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.269250932819!2d-79.38963708735747!3d43.642566170982064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1749073286572!5m2!1sen!2sca"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
            <div className="orderHero hoo">
                <h2>Hours of Operation</h2>
                <p>Monday 9:00AM-5:00PM</p>
                <p>Tuesday 9:00AM-5:00PM</p>
                <p>Wednesday 9:00AM-5:00PM</p>
                <p>Thursday 9:00AM-5:00PM</p>
                <p>Friday 9:00AM-5:00PM</p>
                <p>Saturday 9:00AM-5:00PM</p>
                <p>Sunday 9:00AM-5:00PM</p>
            </div>
        </div>
        </>
    )
}


